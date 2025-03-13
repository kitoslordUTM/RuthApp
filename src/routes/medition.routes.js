import { Router } from "express";
import { createMedition, getMeditions, getMeditionById } from "../controllers/medition.controller";

const router = Router();

router.post('/', createMedition);
router.get('/', getMeditions);
router.get('/:userId', getMeditionById);


export default router;