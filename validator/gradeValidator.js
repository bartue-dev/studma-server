import { body, param } from "express-validator";

const isEmpty = "must not be empty";

export const validateCreateGrade = [
  body("grade").trim()
    .notEmpty().withMessage(`Grade ${isEmpty}`),
  param("studentId")
    .exists().withMessage("studentId doesnt exist")
    .isUUID().withMessage("studentId is not a valid UUID")
]

export const validateGradeId = [
  param("gradeId")
    .exists().withMessage("gradeId doesn't exist")
    .isUUID().withMessage("gradeId is not a valid UUID")
]