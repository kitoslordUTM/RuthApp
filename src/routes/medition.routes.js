import { Router } from "express";
import { createMedition  } from "../controllers/medition.controller";
import { getMeditionsByUserId } from "../controllers/medition.controller";

const router = Router();

router.post('/', createMedition);

router.get("/user/:userId", getMeditionsByUserId);


export default router;