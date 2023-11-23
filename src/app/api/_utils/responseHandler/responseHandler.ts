import { NextResponse } from 'next/server';
import { ResponseHandlerArgs } from '../../_@types';

function responseHandler<T = ResponseHandlerArgs>(data: T) {
  return NextResponse.json({
    success: true,
    timestamp: Number(new Date()),
    ...data,
  });
}

export default responseHandler;
