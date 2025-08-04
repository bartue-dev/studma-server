import { Router } from "express";
import { createGrade, getAllGrade, getGrade } from "../../controllers/api/gradeController.js";
const router = Router();

router.route("/:studentId")
  .post(createGrade)

router.route("/:gradeId")
  .get(getGrade)

router.route("/")
  .get(getAllGrade)

export { router }