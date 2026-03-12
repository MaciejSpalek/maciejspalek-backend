import { Router } from 'express';
import { getList,
    getPostsAmount,
    createOne,
    getOne,
    updateOne,
    deleteOne } from "../controllers/PostController";
import verifyToken from "../middleware/verifyToken";

const router: Router = Router();

router.get("/list", getList);
router.get("/amount", getPostsAmount);
router.post("/create", verifyToken, createOne);
router.get("/:id", getOne);
router.put("/update/:id", verifyToken, updateOne);
router.delete("/delete/:id", verifyToken, deleteOne);

export default router;