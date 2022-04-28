import { StatusCodes } from "http-status-codes";
import { ErrorRequestHandler } from "express";
import { ServerError } from "../core/errors";

export const errorHandler: ErrorRequestHandler = (err: Error, req, res, _) => {
  res
    .status(
      err instanceof ServerError ? err.code : StatusCodes.INTERNAL_SERVER_ERROR
    )
    .json(err.message || "Internal Server Error");
  console.log(err);
};
