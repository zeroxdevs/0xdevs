import { NextRequest, NextResponse } from 'next/server';
import errorHandler from '../errorHandler';

const asyncHandler =
  (fn: Function) =>
  (req: NextRequest, ...args: any) =>
    Promise.resolve(fn(req, ...args)).catch(errorHandler);

export default asyncHandler;
