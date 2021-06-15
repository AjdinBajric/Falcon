import { Router } from "express";
import { logIn } from "../auth";
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

    if (await isUserRegistered(email)) {
      throw new BadRequest("Invalid email.");
    }

    const data = await memberModel.customQuery(
      `INSERT INTO member(name, email, hash, salt) VALUES('${name}', '${email}', '${password}', '${password}')`
    );

    logIn(req, email);
    res.status(200).json({ message: "OK" });
  })
);

export default router;
