import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import CustomErr from "../helper/customErr.js";

/* 
  verifyJwt
  verifyJwt middleware used to verify the current user accessToken before access the api route
  if authHeader falsy return customErr
  if not, takes the token from the header authorization/then use it to verify in jwt.verify 
*/
export const verifyJwt = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader?.startsWith("Bearer")) {
    const err = new CustomErr("Invalid authorization header", 401);
    next(err);
    return;
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        if (err?.name === "TokenExpiredError") {
          const err = new CustomErr("Access Token Expired", 403);
          next(err);
          return;
        }

        const customErr = new CustomErr("Invalid token", 403);
        next(customErr);
        return;
      }

      req.user = decoded;
      next();
    }
  )
}
