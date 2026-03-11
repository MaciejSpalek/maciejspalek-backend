import { Router } from 'express';
import { send } from "../controllers";
const router = Router();
router.post("/send", send);
export default router;
