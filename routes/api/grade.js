import { Router } from "express";
import { createGrade, deleteGrade, getAllGrade, getGrade, updateGrade } from "../../controllers/api/gradeController.js";
const router = Router();

router.route("/student/:studentId")
  .post(createGrade)

router.route("/:gradeId")
  .get(getGrade)
  .put(updateGrade)
  .delete(deleteGrade)

router.route("/")
  .get(getAllGrade)

export { router }