import asyncHandler from "express-async-handler";
import { validateCreateAttenceDate } from "../../validator/attenceDateValidator.js";
import { validationResult } from "express-validator";
import { attendanceDateMethods } from "../../model/queries/api/attendanceDateQueries.js";
import CustomErr from "../../helper/customErr.js";

export const createAttendanceDate = [validateCreateAttenceDate, asyncHandler(async(req, res, next) => {
  const {date , status } = req.body;
  const { studentId } = req.params;
  const teacherId = req.user.id;
  const validationRes = validationResult(req);

  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Failed to create attendance date, validation error",
      error: validationRes.array()
    });
  }

  const attendanceDateData = await attendanceDateMethods.createAttendaceDate(date, status, studentId, teacherId)

  if (!attendanceDateData) {
    const err = new CustomErr("Failed to create attendance date, custom error" ,400)
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Attendance date created successfully",
    attendanceDateData: attendanceDateData
  })
})];

export const getAllAttendanceDate = asyncHandler(async(req, res, next) => {
  const teacherId = req.user.id;

  const attendanceDateData = await attendanceDateMethods.getAllAttendanceDate(teacherId);

  if (!attendanceDateData) {
    const err = new CustomErr("Failed to get all attendance date data", 400)
    next(err);
    return;
  }

  res.status(200).json({
    status: "Sucess",
    message: "Retrieve all attendance date successfully",
    attendanceDateData: attendanceDateData
  })
});