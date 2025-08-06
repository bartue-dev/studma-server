import { body, param } from "express-validator";

const isEmpty = "must not be empty";

export const validateCreateSection = [
  body("section").trim()
    .notEmpty().withMessage(`Section ${isEmpty}`),
  param("studentId")
    .exists().withMessage("studentId doesnt exist")
    .isUUID().withMessage("studentId is not a valid UUID")
]

export const validateSectionId = [
  param("sectionId")
    .exists().withMessage("sectionId doesnt exist")
    .isUUID().withMessage("sectionId is not a valid UUID")
]

export const validateUpdateSection = [
  body("section").trim()
    .notEmpty().withMessage(`Section ${isEmpty}`),
  param("sectionId")
    .exists().withMessage("sectionId doesnt exist")
    .isUUID().withMessage("sectionId is not a valid UUID")
]