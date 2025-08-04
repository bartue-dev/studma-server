import { Router } from "express";
import { createStudent, getStudent, getAllStudent, updateStudent } from "../../controllers/api/studentController.js"; 
const router = Router();

router.route("/")
  .post(createStudent)
  .get(getAllStudent)

router.route("/:studentId")
  .get(getStudent)
  .put(updateStudent)


export { router }