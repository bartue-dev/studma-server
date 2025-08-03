import { body, param } from "express-validator";

const isEmpty = "must not be empty";

export const validateCreateStudent = [
  body("firstname").trim()
    .notEmpty().withMessage(`Firstname ${isEmpty}`)
    .isLength({min: 2}).withMessage("Firstname must be atleast 2 characters or more"),
  body("lastname").trim()
    .notEmpty().withMessage(`Lastname ${isEmpty}`)
    .isLength({min: 2}).withMessage("Lastname must be atleast 2 characters or more"),
]
