import { Router } from 'express';
import { create, get } from "../controllers/HomeController";
import verifyToken from "../middleware/verifyToken";

const router: Router = Router();

router.put("/create", verifyToken, create);
router.get("/get", get);

export default router;