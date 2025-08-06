import { Router } from "express";
import { createSection, deleteSection, getAllSection, getSection, updateSection } from "../../controllers/api/sectionController.js";
const router = Router();

router.route("/student/:studentId")
  .post(createSection)

router.route("/")
  .get(getAllSection)

router.route("/:sectionId")
  .get(getSection)
  .put(updateSection)
  .delete(deleteSection)

export { router }