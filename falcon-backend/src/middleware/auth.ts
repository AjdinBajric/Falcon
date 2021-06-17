import { Request, Response, NextFunction } from "express";
import { BadRequest, Unauthorized } from "../errors";

const isLoggedIn = (req: Request) => !!req.session!.userId;

export const guest = (req: Request, res: Response, next: NextFunction) => {
  if (isLoggedIn(req)) {
    return next(new BadRequest("You are already logged In"));
  }
  next();
};

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!isLoggedIn(req)) {
    return next(new Unauthorized("You must be logged in"));
  }
  next();
};
