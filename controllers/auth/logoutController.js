import asyncHandler from "express-async-handler";
import CustomErr from "../../helper/customErr.js";
import { refreshTokenMethods } from "../../model/queries/auth/authQueries.js";

export const logout = asyncHandler(async (req, res, next) => {
  // note: on client, also delete the accessToken

  //get cookies where the refreshToken lives
  //cookies only accessible when cookie-parser is invoke
  const cookies = req.cookies;

  if (!cookies?.jwt) {
    const err = new CustomErr("No Content", 204);
    next(err);
    return;
  }

  const refreshToken = cookies.jwt;
  const currentAccountByToken = await refreshTokenMethods.currentAccountByToken(refreshToken);

  if (!currentAccountByToken) {
    //if no user clear refreshToken in cookies
    res.clearCookie(
      "jwt",
      {
        httpOnly: true,
        sameSite: "None",
        secure: true
      }
    )
    return res.sendStatus(204)
  }

  //delete refreshToken in db
  await refreshTokenMethods.deleteRefreshToken(currentAccountByToken.accountId);

  //clear the refreshToken in cookies
  res.clearCookie(
    "jwt",
    {
      httpOnly: true,
      sameSite: "None",
      secure: true
    }
  );

  res.status(204).json({
    message: "User logout!"
  });
});