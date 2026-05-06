import { Router, type IRouter } from "express";
import healthRouter from "./health";
import businessApplicationRouter from "./business-application";

const router: IRouter = Router();

router.use(healthRouter);
router.use(businessApplicationRouter);

export default router;
