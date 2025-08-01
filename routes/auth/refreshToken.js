import { Router } from "express";
import { refreshToken } from "../../controllers/auth/refreshTokenController.js";
const router = Router();

router.get("/", refreshToken);

export { router }

