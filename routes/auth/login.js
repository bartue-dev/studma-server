import { Router } from "express";
import { login } from "../../controllers/auth/loginController.js"
const router = Router();

router.post("/", login)

export { router }