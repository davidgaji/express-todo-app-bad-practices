import { RequestHandler, Request } from "express";
import { StatusCodes } from "http-status-codes";

export type ServerResult = {
  code: StatusCodes;
  value: any;
};

export type ServerError = {
  code: StatusCodes;
  message: string;
};

export type Controller = (req: Request) => ServerResult;

export const controllerWrapper =
  (controller: Controller): RequestHandler =>
  async (req, res, next) => {
    try {
      const result = await controller(req);
      return res.status(result.code).json(result.value);
    } catch (error) {
      return next(error);
    }
  };
