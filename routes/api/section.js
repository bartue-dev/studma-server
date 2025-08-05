import { Router } from "express";
import { createSection } from "../../controllers/api/sectionController.js";
const router = Router();

router.route("/:studentId")
  .post(createSection)

export { router }