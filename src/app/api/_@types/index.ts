import HttpError from '../_utils/HttpError';

export interface HttpErrorArgs<ErrorDetail = any> {
  code: number;
  message: string;
  detail?: ErrorDetail;
}

export interface ResponseHandlerArgs {
  message?: string;
}

export type ErrorHandlerArg = Error | HttpError;
