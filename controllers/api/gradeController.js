import asyncHandler from "express-async-handler";
import { validateCreateGrade, validateGradeId, validateUpdateGrade } from "../../validator/gradeValidator.js";
import { validationResult } from "express-validator";
import { gradeMethods } from "../../model/queries/api/gradeQueries.js";
import CustomErr from "../../helper/customErr.js";


export const createGrade = [validateCreateGrade, asyncHandler(async(req, res, next) => {
  const { grade } = req.body;
  const { studentId } = req.params;
  const teacherId  = req.user.id;
  const validationRes = validationResult(req);

  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Failed to create grade, validation error",
      error: validationRes.array()
    });
  }

  const gradeData = await gradeMethods.createGrade(grade, studentId, teacherId);

  if (!gradeData) {
    const err = new CustomErr("Failed to create grade, custom error", 400);
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Grade created successfully",
    gradeData: gradeData
  });
})];

export const getAllGrade = asyncHandler(async(req, res, next) => {
  const teacherId = req.user.id;

  const gradeData = await gradeMethods.getAllGrade(teacherId);

  if (!gradeData) {
    const err = new CustomErr("Failed to retrieve all grade data, custom error", 400);
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Grade data retrieve successfully",
    gradeData: gradeData
  })
});

export const getGrade = [validateGradeId, asyncHandler(async(req, res, next) => {
  const { gradeId } = req.params;
  const validationRes = validationResult(req);

  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Failed to get specific grade data, validation error",
      error: validationRes.array()
    });
  }

  const gradeData = await gradeMethods.getGrade(gradeId);

  if (!gradeData) {
    const err = new CustomErr("Failed to get specific grade data, custom error", 400)
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Grade data retrieve successfully",
    gradeData: gradeData
  })
})];

export const updateGrade = [validateUpdateGrade, asyncHandler(async(req, res, next) => {
  const { grade } = req.body;
  const { gradeId } = req.params;
  const validationRes = validationResult(req);

  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Success",
      message: "Failed to update grade data, validation error",
      error: validationRes.array()
    })
  }

  const gradeData = await gradeMethods.updateGrade(gradeId, grade);

  if (!gradeData) {
    const err = new CustomErr("Failed to update grade data, custom err", 400)
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Grade data update successfully",
    gradeData: gradeData
  });
  
})];
