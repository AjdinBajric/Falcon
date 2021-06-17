import { Router } from "express";
import { compare } from "bcryptjs";
import { catchAsync, guest, auth } from "../middleware";
import Model from "../models/model";
import { Unauthorized } from "../errors/index";
import { logIn, logOut } from "../auth";

const router = Router();
const memberModel = new Model("member");

interface UserProps {
  email: string;
  name: string;
  password: string;
}

const findUserByEmail = async (email: string): Promise<UserProps> => {
  const user = await memberModel.select(
    "email, name, password",
    `WHERE email='${email}'`
  );
  return user.rows[0];
};

router.post(
  "/login",
  guest,
  catchAsync(async (req, res) => {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (!user || !(await compare(password, user.password))) {
      throw new Unauthorized("Incorrect email or password");
    }
    logIn(req, user.email);

    res.json({ message: "OK" });
  })
);

router.post(
  "/logout",
  auth,
  catchAsync(async (req, res) => {
    await logOut(req, res);
  })
);

export default router;
