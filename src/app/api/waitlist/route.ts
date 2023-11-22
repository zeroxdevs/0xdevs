import { asyncHandler } from '@src/utils/helper';
import { waitlistPostSchema } from './_schema';

export const runtime = 'edge';

export const POST = asyncHandler(async (request: Request) => {
  const data: any = await request.json();
  const validation = waitlistPostSchema.safeParse(data);
  if (!validation.success) {
    throw new Error('email not valid');
  }
  const { D1: db } = process.env;
  const {
    results: [{ email }],
  } = await db
    .prepare('SELECT * FROM wait_list WHERE email = ?')
    .bind(data.email)
    .run();
  console.log(email);
  if (email) {
    throw new Error('email already exist !');
  }
  await db
    .prepare('NSERT INTO wait_list (email) VALUES (?)')
    .bind(data.email)
    .run();
  return Response.json({ status: 'done' });
});
