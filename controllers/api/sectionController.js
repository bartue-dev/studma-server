import asyncHandler from "express-async-handler";
import { validateCreateSection } from "../../validator/sectionValidator.js";
import { validationResult } from "express-validator";
import { sectionMethods } from "../../model/queries/api/sectionQueries.js";
import CustomErr from "../../helper/customErr.js";

export const createSection = [validateCreateSection, asyncHandler(async(req, res, next) => {
  const { section } = req.body;
  const { studentId } = req.params;
  const teacherId = req.user.id;
  const validationRes = validationResult(req);

  if (!validationRes.isEmpty()) {
    return res.status(400).json({
      status: "Failed",
      message: "Failed to create section, validation error",
      error: validationRes.array()
    });
  }

  const sectionData = await sectionMethods.createSection(section, studentId, teacherId);

  if (!sectionData) {
    const err = CustomErr("Failed to create section data, custom error", 400) 
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Section created succesfully",
    sectionData: sectionData
  })
})];

export const getAllSection = asyncHandler(async(req, res, next) => {
  const teacherId = req.user.id;

  const sectionData = await sectionMethods.getAllSection(teacherId);

  if (!sectionData) {
    const err = new CustomErr("Failed to get all section data, custom error", 400);
    next(err);
    return;
  }

  res.status(200).json({
    status: "Success",
    message: "Retrieve all section data successfully",
    sectionData: sectionData
  })
})