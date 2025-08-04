import asyncHandler from "express-async-handler";
import { validateCreateGrade } from "../../validator/gradeValidator.js";
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
    const err = new CustomErr("Failed to create grade, custom error");
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Grade created successfully",
    gradeData: gradeData
  });
})];
