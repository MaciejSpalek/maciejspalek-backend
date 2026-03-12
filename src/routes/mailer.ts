import { Router } from 'express';
import { send } from "../controllers/MailerController";

const router: Router = Router();

router.post("/send", send);

export default router;