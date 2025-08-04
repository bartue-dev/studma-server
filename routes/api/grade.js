import { Router } from "express";
import { createGrade } from "../../controllers/api/gradeController.js";
const router = Router();

router.route("/:studentId")
  .post(createGrade)

export { router }