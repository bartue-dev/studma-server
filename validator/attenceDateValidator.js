import { body, param } from "express-validator";

const isEmpty = "must not be empty";

export const validateCreateAttenceDate = [
  body("date").trim()
    .notEmpty().withMessage(`Attendance date ${isEmpty}`)
    .isDate().withMessage("Invalid Date")
]

export const validateAttendanceDateId = [
  param("attendanceDateId")
    .exists().withMessage("attendanceDateId doesnt exist")
    .isUUID().withMessage("attendanceDateId is not a valid UUID")
]