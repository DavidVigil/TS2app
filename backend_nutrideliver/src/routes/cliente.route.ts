import { Router } from "express";
import {
  createCliente,
  deleteCliente,
  getClienteById,
  getClientes,
} from "../controllers/cliente.controller";

const router: Router = Router();

router.post("/", createCliente);
router.get("/", getClientes);
router.get("/:idCliente", getClienteById);
router.put("/:idCliente");
router.delete("/:idCliente", deleteCliente);

export default router;
