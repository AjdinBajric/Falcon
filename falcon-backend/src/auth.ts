import { Request, Response } from "express";
import { SESSION_NAME } from "./config";

export const logIn = (req: Request, userId: string) => {
  req.session!.userId = userId;
};

export const logOut = (req: Request, res: Response) => {
  new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);
      res.clearCookie(SESSION_NAME);
      res.json({ message: "OK" });
      resolve(req);
    });
  });
};
