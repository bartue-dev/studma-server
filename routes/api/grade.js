import { Router } from "express";
import { createGrade, getAllGrade } from "../../controllers/api/gradeController.js";
const router = Router();

router.route("/:studentId")
  .post(createGrade)

router.route("/")
  .get(getAllGrade)

export { router }