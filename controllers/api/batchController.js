import asyncHandler from "express-async-handler";
import { validateBatchId, validateCreateBatch, validateUpdateBatch } from "../../validator/batchValidator.js";
import { validationResult } from "express-validator";
import validationHelper from "../../helper/validationResult.js";
import { batchMethods } from "../../model/queries/api/batchQueries.js";
import CustomErr from "../../helper/customErr.js";

export const createBatch = [validateCreateBatch, asyncHandler(async(req, res, next) => {
  const { year } = req.body;
  const { studentId } = req.params;
  const teacherId = req.user.id;
  const validationRes = validationResult(req);
  
  validationHelper(
    validationRes,
    "Failed to create batch data, validation error",
    validationRes.array(),
    res
   );

   const batchData = await batchMethods.createBatch(year, studentId, teacherId)

   if (!batchData) {
    const err = new CustomErr("Failed to create batch data, custom error" ,400)
    next(err);
    return;
   }

   res.status(200).json({
    status: "Success",
    message: "Batch data created successfully",
    batchData: batchData
   })
})];

export const getAllBatch = asyncHandler(async(req, res, next) => {
  const teacherId = req.user.id;

  const batchData = await batchMethods.getAllBatch(teacherId);

  if (!batchData) {
    const err = new CustomErr("Failed to get all batch data, custom error", 400)
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Retrieve all batch data successfully",
    batchData: batchData
  })
});

export const getBatch = [validateBatchId ,asyncHandler(async(req, res, next) => {
  const { batchId } = req.params;
  const validationRes = validationResult(req);

  validationHelper(
    validationRes,
    "Failed to get batch data, validation error",
    validationRes.array(),
    res
  )

  const batchData = await batchMethods.getBatch(batchId);

  if (!batchData) {
    const err = new CustomErr("Failed to get batch data, custom error", 400);
    next(err);
    return;
  } 

  res.status(200).json({
    status: "Success",
    message: "Retrieve batch data successfully",
    batchData: batchData
  })
})];

export const updateBatch = [validateUpdateBatch ,asyncHandler(async(req, res, next) => {
  const { year } = req.body;
  const { batchId } = req.params;
  const validationRes = validationResult(req);

  validationHelper(
    validationRes,
    "Failed to update batch data, validation error",
    validationRes.array(),
    res
  );

  const batchData = await batchMethods.updateBatch(year, batchId);

  if (!batchData) {
    const err = new CustomErr("Failed to update batch data, custom error", 400);
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Batch data updated successfully",
    batchData: batchData
  });
})];

export const deleteBatch = [validateBatchId, asyncHandler(async(req, res, next) => {
  const { batchId } = req.params;
  const validationRes = validationResult(req);

  validationHelper(
    validationRes,
    "Failed to delete batch data, validation error",
    validationRes.array(),
    res
  );

  const batchData = await batchMethods.deleteBatch(batchId);

  if (!batchData) {
    const err= new CustomErr("Failed to delete batch data, custom error", 400)
    next(err);
    return;
  }
  
  res.sendStatus(204)
})];