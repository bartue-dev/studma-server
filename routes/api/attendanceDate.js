import { Router } from "express";
import { createAttendanceDate, getAllAttendanceDate, getAttendanceDate } from "../../controllers/api/attendanceDateController.js";
const router = Router();

router.route("/student/:studentId")
  .post(createAttendanceDate)

router.route("/")
  .get(getAllAttendanceDate)

router.route("/:attendanceDateId")
  .get(getAttendanceDate)

export { router }