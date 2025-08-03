import { Router } from "express";
import { createStudent, getStudent, getAllStudent } from "../../controllers/api/studentController.js"; 
const router = Router();

router.route("/")
  .post(createStudent)
  .get(getAllStudent)

router.route("/:studentId")
  .get(getStudent)


export { router }