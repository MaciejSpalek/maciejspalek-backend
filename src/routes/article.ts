import { Router } from 'express';
import { articleController } from "../controllers";
import verifyToken from "../middleware/verifyToken";

const router: Router = Router();

router.get("/list", articleController.getAll);
router.post("/create", verifyToken, articleController.createOne);
router.get("/:id", articleController.getOne);
router.put("/:id", verifyToken, articleController.updateOne);
router.delete("/:id", verifyToken, articleController.deleteOne);

export default router;