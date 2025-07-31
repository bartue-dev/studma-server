/* 
  ***two types of error***
  OPERATIONAL ERROR: An error that can be predict
  PROGRAMMING ERROR: An error that made by programmers


  Handles production and development errors
  this way is more secure and to pass a appropiate errors during development or production

*/

import dotenv from "dotenv";
import { handlePrismaError } from "../model/prismaClient/prismaErrorHandler.js";
dotenv.config();

//development err
const devErr = (res, err) => {
  res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.message,
    stackTrace: err.stack,
    error: err
  });
}

//production err
const prodErr = (res, err) => {
  if (err.isOperation === true) {
    res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
      error: err
    })
  } else {
    res.status(500).json({
      status: 500,
      message: err.message,
      error: err
    })
  }
}

const prismaError = (err) => {
  return handlePrismaError(err)
}

// err handler middleware
const errHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "err";

  if (process.env.NODE_ENV === "development") {
    if (err.name === "PrismaClientKnownRequestError") {
      err = prismaError(err)
    }

    devErr(res, err);
  } else if (process.env.NODE_ENV === "production") {
    if (err.name === "PrismaClientKnownRequestError") {
      err = prismaError(err)
    }

    prodErr(res, err);
  }
}  

export default errHandler;

