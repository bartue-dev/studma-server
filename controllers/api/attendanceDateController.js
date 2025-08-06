import asyncHandler from "express-async-handler";
import { validateAttendanceDateId, validateCreateAttenceDate, validateUpdateAttendanceDate } from "../../validator/attenceDateValidator.js";
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

export const getAttendanceDate = [validateAttendanceDateId ,asyncHandler(async(req, res, next) => {
  const { attendanceDateId } = req.params;
  const validationRes = validationResult(req);

  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Failed to get attendance date, validation error",
      error: validationRes.array()
    });
  }

  const attendanceDateData = await attendanceDateMethods.getAttendanceDate(attendanceDateId);

  if (!attendanceDateData) {
    const err = new CustomErr("Failed to get attendance date, custom error", 400);
    next(err)
    return
  }

  res.status(200).json({
    status: "Sucess",
    message: "Retirieve the attendance date successfully",
    attendanceDateData: attendanceDateData
  })
})];

export const updateAttendanceDate = [validateUpdateAttendanceDate, asyncHandler(async(req, res, next) => {
  const { date, status} = req.body;
  const { attendanceDateId } = req.params;
  const validationRes = validationResult(req);

  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Failed to update attendance date, validation error",
      error: validationRes.array()
    });
  }

  const attendanceDateData = await attendanceDateMethods.updateAttendanceDate(date, status, attendanceDateId);

  if (!attendanceDateId) {
    const err = new CustomErr("Failed to update attendance date, custom error", 400)
    next(err);
    return
  }

  res.status(200).json({
    status: "Success",
    message: "Attendance date data updated successfully",
    attendanceDateData: attendanceDateData
  })  
})];

export const deleteAttendanceDate = [validateAttendanceDateId ,asyncHandler(async(req, res, next) => {
  const { attendanceDateId } = req.params;
  const validationRes = validationResult(req);

  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Failed to delete attendance date data, validation error",
      error: validationRes.array()
    });
  }

  const attendanceDateData = await attendanceDateMethods.deleteAttendanceDate(attendanceDateId);

  if (!attendanceDateData) {
    const err = new CustomErr("Failed to delete attendance date data, custom error", 400)
    next(err);
    return;
  }

  res.sendStatus(204)
})];