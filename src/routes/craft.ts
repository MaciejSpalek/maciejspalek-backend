import { Router } from 'express';
import { createOrUpdate, getAll, getOne } from "../controllers/CraftController";
import verifyToken from "../middleware/verifyToken";

const router: Router = Router();

router.put("/create-or-update", verifyToken, createOrUpdate);
router.get("/get-all", getAll);
router.get("/get/:type", getOne);

export default router;