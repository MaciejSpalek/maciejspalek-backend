import { Router } from 'express';
import { register, login, verifyUser } from "../controllers/AuthController";
import verifyToken from "../middleware/verifyToken";

const router: Router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verifyUser", verifyToken, verifyUser);

export default router;