import { Router } from "express";
import { createBook } from "../controllers/book.controllers.js";

const router = Router();

router.route("/add").post(createBook);
export default router;
