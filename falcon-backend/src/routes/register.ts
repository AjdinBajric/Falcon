import { Router } from "express";
import { logIn } from "../auth";
import { guest } from "../middleware";
import Model from "../models/model";

const router = Router();
const memberModel = new Model("member");

const isUserRegistered = async (email: string): Promise<Boolean> => {
  const data = await memberModel.select("*", `WHERE email='${email}'`);
  return data.rows.length > 0;
};

router.post("/register", guest, async (req, res) => {
  const { email, name, password } = req.body;
  try {
    if (await isUserRegistered(email)) {
      res.status(403).json({ message: "User is already registered." });
    } else {
      const data = await memberModel.customQuery(
        `INSERT INTO member(name, email, hash, salt) VALUES('${name}', '${email}', '${password}', '${password}')`
      );

      logIn(req, email);

      res.status(200).json({ email, name });
    }
  } catch (err) {
    res
      .status(403)
      .json({ message: "An error has occured, please try again later." });
  }
});

export default router;
