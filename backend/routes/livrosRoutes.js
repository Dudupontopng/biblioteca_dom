import { listarLivros } from "../controllers/livrosController";
import express from "express";

const router = express.Router();
router.get("/", listarLivros);

export default router;