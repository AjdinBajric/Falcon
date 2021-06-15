import { RequestHandler, Request, Response, NextFunction } from "express";

export const catchAsync =
  (handler: RequestHandler) =>
  (...args: [Request, Response, NextFunction]) => {
    Promise.resolve(handler(...args)).catch((err) => args[2](err));
  };

export const internalServerError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!err.status) {
    console.error(err.stack);
  }
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error!" });
};

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Sorry I can't find that!" });
};
