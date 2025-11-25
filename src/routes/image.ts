import { Router } from 'express';
import { imageController } from "../controllers";
import uploadMiddleware from "../middleware/upload";

const router: Router = Router();

router.post("/upload", uploadMiddleware, imageController.upload);

export default router;