import { Router } from "express";
import ClienteRouter from "./cliente.route";

const router: Router = Router();

router.use("/cliente", ClienteRouter);

export default router;