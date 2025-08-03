import { Router } from "express";
import { createStudent } from "../../controllers/api/studentController.js"; 
const router = Router();

router.post("/", createStudent)



export { router }