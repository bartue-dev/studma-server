import { Router } from "express";
import { createAttendanceDate } from "../../controllers/api/attendanceDateController.js";
const router = Router();

router.route("/:studentId")
  .post(createAttendanceDate)

export { router }