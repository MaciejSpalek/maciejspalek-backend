import { Router } from 'express';
import { upload } from "../controllers/ImageController";
import uploadMiddleware from "../middleware/upload";

const router: Router = Router();

router.post("/upload", uploadMiddleware, upload);

export default router;