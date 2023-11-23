import { HttpErrorArgs } from '../../_@types';

class HttpError<ErrorDetail = any> extends Error {
  public code: number;
  public detail?: ErrorDetail;

  constructor(args: HttpErrorArgs<ErrorDetail>) {
    const { code, detail, message } = args;
    super(message);
    Object.setPrototypeOf(this, HttpError.prototype);
    this.code = code < 100 || code > 599 ? 500 : code;
    this.detail = detail;
  }
}

export default HttpError;
