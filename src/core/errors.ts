import { StatusCodes } from "http-status-codes";

interface IError {
  type: string;
  message: string;
  error?: any;
  data?: any;
}

export class NotFoundError implements IError {
  public readonly type = "NotFoundError";
  constructor(
    readonly message: string,
    readonly error?: any,
    readonly data?: any
  ) {}
}

export class ServerError {
  constructor(readonly code: StatusCodes, readonly message: string) {}
}
