import { Router } from 'express';
import { craftController } from "../controllers";
import verifyToken from "../middleware/verifyToken";
const router = Router();
router.put("/create-or-update", verifyToken, craftController.createOrUpdate);
router.get("/get-all", craftController.getAll);
router.get("/get/:type", craftController.getOne);
export default router;
