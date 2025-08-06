import { Router } from "express";
import { createSection, getAllSection, getSection } from "../../controllers/api/sectionController.js";
const router = Router();

router.route("/:studentId")
  .post(createSection)

router.route("/")
  .get(getAllSection)

router.route("/:sectionId")
  .get(getSection)

export { router }