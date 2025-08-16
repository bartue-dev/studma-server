import { body, param } from "express-validator";

const isEmpty = "must not be empty";
const status = ["PRESENT", "ABSENT", "LATE", "EXCUSE"];

export const validateCreateAttenceDate = [
  body("date").trim()
    .notEmpty().withMessage(`Attendance date ${isEmpty}`)
    .isDate().withMessage("Invalid Date"),
  body("status").trim()
    .notEmpty().withMessage(`Status ${isEmpty}`)
    .isIn(status).withMessage("Status must be one of: PRESENT, ABSENT, LATE, EXCUSE")
]

export const validateAttendanceDateId = [
  param("attendanceDateId")
    .exists().withMessage("attendanceDateId doesnt exist")
    .isUUID().withMessage("attendanceDateId is not a valid UUID")
]

export const validateUpdateAttendanceDate = [
  param("attendanceDateId")
    .exists().withMessage("attendanceDateId doesnt exist")
    .isUUID().withMessage("attendanceDateId is not a valid UUID"),
  body("status").trim()
    .notEmpty().withMessage(`Status ${isEmpty}`)
    .isIn(status).withMessage("Status must be one of: PRESENT, ABSENT, LATE, EXCUSE")
]