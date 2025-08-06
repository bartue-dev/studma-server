import { Router } from "express";
import { createAttendanceDate, getAllAttendanceDate } from "../../controllers/api/attendanceDateController.js";
const router = Router();

router.route("/:studentId")
  .post(createAttendanceDate)

router.route("/")
  .get(getAllAttendanceDate)

export { router }