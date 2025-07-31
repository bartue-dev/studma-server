export default class CustomErr extends Error {
  constructor (message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 && statusCode < 500 ? "Fail" : "Error";

    this.isOperation = true

    Error.captureStackTrace(this, this.constructor);
  }
}