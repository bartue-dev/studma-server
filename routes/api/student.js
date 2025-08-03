import { Router } from "express";
import { createStudent, getStudent } from "../../controllers/api/studentController.js"; 
const router = Router();

router.post("/", createStudent)
router.route("/:studentId")
  .get(getStudent)


export { router }