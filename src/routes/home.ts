import { Router } from 'express';
import { homeController} from "../controllers";
import verifyToken from "../middleware/verifyToken";

const router: Router = Router();

router.put("/create", verifyToken, homeController.create);
router.get("/get", homeController.get);

export default router;