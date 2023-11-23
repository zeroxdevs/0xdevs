import { NextResponse } from 'next/server';
import { ErrorHandlerArg } from '../../_@types';
import HttpError from '../HttpError';

const errorHandler = (err: ErrorHandlerArg) => {
  let errCode = 500;
  let errMsg = 'Internal Server Error';
  let errDetail = undefined;
  if (err.message.startsWith('D1_ERROR')) {
    errCode = 500;
    errMsg = 'Database failure';
    if (~err.message.indexOf('UNIQUE constraint failed')) {
      errCode = 409;
      errMsg = `This ${
        err.message.split(':')[2].split('.')[1] || 'request'
      } has already been registered`;
    }
  }
  if (err instanceof SyntaxError) {
    errCode = 400;
    errMsg = 'Syntax Problem';
  }
  if (err instanceof HttpError) {
    errCode = err.code;
    errMsg = err.message;
    errDetail = err.detail;
  }
  return NextResponse.json(
    {
      success: false,
      timestamp: Number(new Date()),
      message: errMsg,
      detail: errDetail,
      stack: !(process.env.NODE_ENV === 'production') ? err.stack : undefined,
    },
    { status: 500 },
  );
};

export default errorHandler;
