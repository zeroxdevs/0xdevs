import { z } from 'zod';
import regex from '@src/utils/regex';

export const waitlistPostSchema = z.object({
  email: z.string().regex(regex.email),
});
