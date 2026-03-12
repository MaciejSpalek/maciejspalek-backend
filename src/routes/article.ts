import { Router } from 'express';
import { getAll,
    createOne,
    getOne,
    updateOne,
    deleteOne } from "../controllers/ArticleController";
import verifyToken from "../middleware/verifyToken";

const router: Router = Router();

router.get("/list", getAll);
router.post("/create", verifyToken, createOne);
router.get("/:id", getOne);
router.put("/:id", verifyToken, updateOne);
router.delete("/:id", verifyToken, deleteOne);

export default router;