import { Router } from "express";
import { logout } from "../../controllers/auth/logoutController.js";
const router = Router();

router.post("/", logout)

export { router }