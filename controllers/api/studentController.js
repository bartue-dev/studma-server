import asyncHandler from "express-async-handler";
import { validateCreateStudent, validateStudentId, validateUpdateStudent } from "../../validator/studentValidator.js";
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
      message: "Failed to create student, validation error",
      error: reqValidation.array()
    });
  }

  const studentData = await studentMethods.createStudent(firstname, lastname, teacherId);

  if (!studentData) {
    const err = CustomErr("Failed to create student, custom error", 400);
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Student created successfully",
    studentData: studentData
  });
})];

export const getStudent = [validateStudentId, asyncHandler(async(req, res, next) => {
  const { studentId } = req.params;
  const paramValidation = validationResult(req);

  if (!paramValidation.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Failed to retrieve student, validation error",
      error: paramValidation.array()
    });
  }

  const studentData = await studentMethods.getStudent(studentId);

  if (!studentData) {
    const err = new CustomErr("Failed to retrieve student, custom error", 400)
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Student data retrieve successfully",
    studentData: studentData
  });
})];

export const getAllStudent = asyncHandler(async(req, res, next) => {
  const teacherId = req.params.id;

  const studentData = await studentMethods.getAllStudent(teacherId);

  if (!studentData) {
    const err = new CustomErr("Failed to retrieve student, custom error", 400);
    next(err);
    return
  }

  res.status(200).json({
    status: "Success",
    message: "Student data retrieve successfully",
    studentData: studentData
  })
});

export const updateStudent = [validateUpdateStudent, asyncHandler(async(req, res, next) => {
  const { studentId } = req.params;
  const { firstname, lastname } = req.body;
  const validationRes = validationResult(req)

  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Failed to update student, validation error",
      error: validationRes.array()
    });
  }

  const studentData = await studentMethods.updateStudent(studentId, firstname, lastname);

  if (!studentData) {
    const err = new CustomErr("Failed to update student, custom error")
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Student data updated successfully",
    studentData: studentData
  })
})];

export const deleteStudent = [validateStudentId, asyncHandler(async(req, res, next) => {
  const { studentId } = req.params;
  const validationRes = validationResult(req);

  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Failed to delete student, validation error",
      error: validationRes.array()
    })
  }

  const studentData = await studentMethods.deleteStudent(studentId);

  if (!studentData) {
    const err = new CustomErr("Failed to delete student, custom error");
    next(err);
    return;
  }

  res.sendStatus(204)
})];