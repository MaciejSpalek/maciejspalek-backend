import { Router } from 'express';
import { authController } from "../controllers";
import verifyToken from "../middleware/verifyToken";
const router = Router();
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/verifyUser", verifyToken, authController.verifyUser);
export default router;
