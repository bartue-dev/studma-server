import { Router } from "express";
import { createGrade, getAllGrade, getGrade, updateGrade } from "../../controllers/api/gradeController.js";
const router = Router();

router.route("/:studentId")
  .post(createGrade)

router.route("/:gradeId")
  .get(getGrade)
  .put(updateGrade)

router.route("/")
  .get(getAllGrade)

export { router }