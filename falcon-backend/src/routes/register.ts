import { Router } from "express";
import { logIn } from "../auth";
import { NUMBER_OF_ROUNDS } from "../config";
import { hash, genSalt } from "bcryptjs";
import { BadRequest } from "../errors";
import { guest, catchAsync } from "../middleware";
import Model from "../models/model";

const router = Router();
const memberModel = new Model("member");

const isUserRegistered = async (email: string): Promise<Boolean> => {
  const data = await memberModel.select("*", `WHERE email='${email}'`);
  return data.rows.length > 0;
};

router.post(
  "/register",
  guest,
  catchAsync(async (req, res) => {
    const { email, name, password } = req.body;

    const salt = await genSalt(NUMBER_OF_ROUNDS);
    const hashedPassword = await hash(password, salt);

    if (await isUserRegistered(email)) {
      throw new BadRequest("Invalid email.");
    }

    const data = await memberModel.customQuery(
      `INSERT INTO member(name, email, password) VALUES('${name}', '${email}', '${hashedPassword}')`
    );

    logIn(req, email);
    res.status(200).json({ message: "OK" });
  })
);

export default router;
