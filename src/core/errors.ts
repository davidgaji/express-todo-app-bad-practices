interface IError {
  type: string;
  message: string;
  error?: any;
  data?: any;
}

class NotFoundError implements IError {
  public readonly type = "NotFoundError";
  constructor(
    readonly message: string,
    readonly error?: any,
    readonly data?: any
  ) {}
}
