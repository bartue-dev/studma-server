import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { accountMethods, refreshTokenMethods } from "../../model/queries/auth/authQueries.js";
import CustomErr from "../../helper/customErr.js";


dotenv.config();

export const login = asyncHandler(async(req, res, next) => {
  const {username, password} = req.body;

  const currentAccountByUsername = await accountMethods.currentAccountByUsername(username); 

  if (!currentAccountByUsername) {
    const err = new CustomErr("Incorrect username", 400);
    next(err)
    return;
  }

  const passwordMatch = await bcrypt.compare(password, currentAccountByUsername.password);

  if (!passwordMatch) {
    const err = new CustomErr("Incorrect password", 400);
    next(err);
    return;
  } else {
    //create jwt

    //access token
    const accessToken = jwt.sign(
      {
        "id": currentAccountByUsername.accountId,
        "firstname": currentAccountByUsername.firstname,
        "lastname": currentAccountByUsername.lastname,
        "username": currentAccountByUsername.username,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: "30min"}
    );

    //refresh token
    const refreshToken = jwt.sign(
      {
        "id": currentAccountByUsername.accountId,
        "firstname": currentAccountByUsername.firstname,
        "lastname": currentAccountByUsername.lastname,
        "username": currentAccountByUsername.username,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {expiresIn: "1d"}
    );

    //save refresh token to db
    const saveToken = await refreshTokenMethods.saveRefreshToken(currentAccountByUsername.accountId, refreshToken)

    if (!saveToken) {
      const err = new CustomErr("Error on saving token on db", 400);
      next(err);
      return;
    }

    //save refreshToken to cookie httpOnly
    res.cookie(
      "jwt",
      refreshToken,
      {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000 // 2days
      }
    );

    res.status(200).json({
      status: "Success",
      message: "Log in successfully",
      accessToken: accessToken,
    })
  }
});