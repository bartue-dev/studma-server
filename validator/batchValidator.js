import { body, param } from "express-validator";

const isEmpty = "must not be empty";

export const validateCreateBatch = [
  body("year").trim()
    .notEmpty().withMessage(`Year ${isEmpty}`)
    .isDate().withMessage("Invalid year")
]

export const validateBatchId = [
  param("batchId")
    .exists().withMessage("batchId doesnt exist")
    .isUUID().withMessage("batchId is not a valid UUID")
]

export const validateUpdateBatch = [
  body("year").trim()
    .notEmpty().withMessage(`Year ${isEmpty}`)
    .isDate().withMessage("Invalid year"),
  param("batchId")
    .exists().withMessage("batchId doesnt exist")
    .isUUID().withMessage("batchId is not a valid UUID")
]