import dotenv from "dotenv";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken"
import CustomErr from "../../helper/customErr.js";
import { refreshTokenMethods } from "../../model/queries/auth/authQueries.js";

//refreshToken
//refreshToken endpoint is used to create a new accessToken if the current accesToken expires
export const refreshToken = asyncHandler(async(req, res, next) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    const err = new CustomErr("Unauthorized", 401);
    next(err);
    return
  }

  const refreshToken = cookies?.jwt;

  //get the current account by token
  const currentAccountByToken = await refreshTokenMethods.currentAccountByToken(refreshToken);

  if (!currentAccountByToken) {
    const err = new CustomErr("Unauthorized. User not found", 401)
    next(err);
    return;
  }

  /* 
  if current account by refresh token exist
  verify it in jwt
  then if err or currentAccount.accountid not equal to decoded id 
  return an response of 403 Forbidden
  otherwise create new accessToken
  */
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err?.name === "TokenExpiredError") {
        const err = new CustomErr("Refresh token expired", 403)
        next(err);
        return;
      }

      if (err || currentAccountByToken.accountId !== decoded) {
        const err = new CustomErr("Current account and decoded not match", 403);
        next(err);
        return;
      }

      //new access token
      const accessToken = jwt.sign(
        {
          "id": decoded.id,
          "firstname": decoded.firstname,
          "lastname": decoded.lastname,
          "username": decoded.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30min" }
      );

      res.status(200).json({
        status: "Sucess",
        accessToken: accessToken,
      });
    }
  )
});