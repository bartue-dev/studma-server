import { Router } from "express";
import { register } from "../../controllers/auth/registerController.js";
const router = Router();

router.post("/", register)

export { router };