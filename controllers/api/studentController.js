import asyncHandler from "express-async-handler";
import { validateCreateStudent } from "../../validator/studentValidator.js";
import { validationResult } from "express-validator";
import { studentMethods } from "../../model/queries/api/studentQueries.js";
import CustomErr from "../../helper/customErr.js";

export const createStudent = [validateCreateStudent ,asyncHandler(async(req, res, next) => {
  const { firstname, lastname } = req.body;
  const teacherId = req.user.id;
  const reqValidation = validationResult(req);

  if (!reqValidation.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Create Student failed, validation error",
      error: reqValidation.array()
    });
  }

  const studentData = await studentMethods.createStudent(firstname, lastname, teacherId);

  if (!studentData) {
    const err = CustomErr("Create Student failed, custom error", 400);
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Student created successfully",
    studentData: studentData
  });
})];
