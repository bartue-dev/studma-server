import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import credentials from "./middleware/credentials.js";
import corsOption from "./config/corsOptions.js";
import CustomErr from "./helper/customErr.js";
import errHandler from "./middleware/errorHandler.js";
import {loginRoute, refreshTokenRoute, registerRoute} from "./routes/index.js"
import { verifyJwt } from "./middleware/verifyJwt.js";

dotenv.config();
const app = express();

//handles syncchronous error. Ex. undifined variable or function
//it should shut down the app because the server already crashed
//it should invoke before the app express() to make sure it work
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Uncaught Exception occured!, shutting down");

  process.exit(1);
})

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials)

// Cross Origin Resource Sharing
app.use(cors(corsOption))

// middleware json
app.use(express.json())

// other body request
app.use(express.urlencoded({extended: true}))

// middleware for cookies
app.use(cookieParser());

//api routes here!
//auth endpoints
app.use("/v1/register", registerRoute);
app.use("/v1/login", loginRoute);
app.use("/v1/refreshToken", refreshTokenRoute);

//check user
app.use(verifyJwt)

//api's
app.get("/v1/testing", (req, res, next) => {
  res.status(200).json({
    status: "Success",
    message: "Lezzgowww"
  });
});



// default route
// handles error if the url cannot find
app.all(/(.*)/, (req, res, next) => {
  const err = new CustomErr(`Can't find ${req.originalUrl} on the server`, 404)
  next(err)
});

// errorHandler middleware
app.use(errHandler)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server listening to PORT " + PORT);
});

//handle rejection promise, if no catch block to a promise
//it should shut down the app because the server already crashed
process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection occured, shutting down");

  server.cloce(() => {
    process.exit(1);
  })
});

/* 
  process.exit( code )
  Code: It can be either 0 or 1. 
  0 means end the process without any kind of failure and 
  1 means end the process with some failure.
*/
