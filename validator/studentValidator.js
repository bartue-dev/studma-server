import { body, param } from "express-validator";

const isEmpty = "must not be empty";
const isInt = "must be an integer"

const quarter = ["first", "second", "third", "fourth"]

export const validateCreateStudent = [
  body("firstname").trim()
    .notEmpty().withMessage(`Firstname ${isEmpty}`)
    .isLength({min: 2}).withMessage("Firstname must be atleast 2 characters or more"),
  body("lastname").trim()
    .notEmpty().withMessage(`Lastname ${isEmpty}`)
    .isLength({min: 2}).withMessage("Lastname must be atleast 2 characters or more"),
  body("grade").trim()
    .notEmpty().withMessage(`Grade ${isEmpty}`)
    .isInt().withMessage(`Grade ${isInt}`),
  body("section").trim()
    .notEmpty().withMessage(`Section ${isEmpty}`),
  body("batch").trim()
    .notEmpty().withMessage(`Batch ${isEmpty}`),
]

export const validateStudentId = [
  param("studentId")
    .exists().withMessage("studentId doens't exist")
    .isUUID().withMessage("studentId is not valid UUID")
]

export const validateUpdateStudent = [
  body("firstname").trim()
    .notEmpty().withMessage(`Firstname ${isEmpty}`)
    .isLength({min: 2}).withMessage("Firstname must be atleast 2 characters or more"),
  body("lastname").trim()
    .notEmpty().withMessage(`Lastname ${isEmpty}`)
    .isLength({min: 2}).withMessage("Lastname must be atleast 2 characters or more"),
  body("grade").trim()
    .notEmpty().withMessage(`Grade ${isEmpty}`)
    .isInt().withMessage(`Grade ${isInt}`),
  body("section").trim()
    .notEmpty().withMessage(`Section ${isEmpty}`),
  body("batch").trim()
    .notEmpty().withMessage(`Batch ${isEmpty}`),
  param("studentId")
    .exists().withMessage("studentId doens't exist")
    .isUUID().withMessage("studentId is not valid UUID")
]