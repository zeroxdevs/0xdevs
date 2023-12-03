import { asyncHandler } from '@src/app/api/_utils/asyncHandler';
import { waitlistPostSchema } from './_schema';
import { NextRequest, NextResponse } from 'next/server';
import responseHandler from '../_utils/responseHandler';
import captchaVerifier from '../_utils/captchaVerifier';

export const runtime = 'edge';

export const POST = asyncHandler(async (request: NextRequest) => {
  const data: any = await request.json();
  const validation = waitlistPostSchema.safeParse(data);
  if (!validation.success) {
    throw new Error('email not valid');
  }
  const captchaVerify = await captchaVerifier(data.token);
  if (!captchaVerify) {
    throw new Error('recapcha faild');
  }
  if (!(process.env.NODE_ENV === 'development')) {
    const { D1: db } = process.env;
    await db
      .prepare('INSERT INTO wait_list (email) VALUES (?)')
      .bind(data.email)
      .run();
  }

  return responseHandler({
    message: 'Your email has been successfully added to the waiting list',
  });
});
