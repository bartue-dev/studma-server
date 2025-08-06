import { Router } from "express";
import { 
  createBatch, 
  deleteBatch, 
  getAllBatch, 
  getBatch, 
  updateBatch 
} from "../../controllers/api/batchController.js";
const router = Router();

router.route("/student/:studentId")
  .post(createBatch)

router.route("/")
  .get(getAllBatch)

router.route("/:batchId")
  .get(getBatch)
  .update(updateBatch)
  .delete(deleteBatch)

export { router }