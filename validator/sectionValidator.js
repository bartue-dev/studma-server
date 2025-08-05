import { body, param } from "express-validator";

const isEmpty = "must not be empty";

export const validateCreateSection = [
  body("section").trim()
    .notEmpty().withMessage(`Section ${isEmpty}`),
  param("studentId")
    .exists().withMessage("studentId doesnt exist")
    .isUUID().withMessage("studentId is not a valid UUID")
]