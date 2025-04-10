import express from "express";
import livroController from "../controllers/livroController.js";

const router = express.Router();

router.get("/", livroController.getAll);
router.get("/:id", livroController.getById);
router.post("/", livroController.create);
router.put("/:id", livroController.update);
router.delete("/:id", livroController.delete);

export default router;