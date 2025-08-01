import { Router } from "express";
import { logout } from "../../controllers/auth/logoutController.js";
const router = Router();

router.get("/", logout)

export { router }