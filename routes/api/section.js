import { Router } from "express";
import { createSection, getAllSection } from "../../controllers/api/sectionController.js";
const router = Router();

router.route("/:studentId")
  .post(createSection)

router.route("/")
  .get(getAllSection)

export { router }