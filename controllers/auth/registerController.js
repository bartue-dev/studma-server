import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { accountMethods } from "../../model/queries/auth/authQueries.js";
import CustomErr from "../../helper/customErr.js";

export const register = asyncHandler(async(req, res, next) => {
  const { firstname, lastname, username, password} = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const registeredAccount = await accountMethods.registerAccount(firstname, lastname, username, hashPassword);

  if (!registeredAccount) {
    const err = new CustomErr("Cannot create an account", 400)
    next(err)
    return
  }

  res.status(201).json({
    status: "Success",
    message: "Acconut registered succesfully"
  });
});