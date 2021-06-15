import { Request, Response, NextFunction } from "express";

const isLoggedIn = (req: Request) => !!req.session!.userId;

export const guest = (req: Request, res: Response, next: NextFunction) => {
  if (isLoggedIn(req)) {
    return next(new Error("You are already logged In"));
  }
  next();
};
