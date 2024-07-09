import { Router } from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBooksByCategory,
  updateBook,
} from "../controllers/book.controllers.js";

const router = Router();

router.route("/add").post(createBook);
router.route("/allbooks").get(getAllBooks);
router.route("/update/:id").put(updateBook);
router.route("/delete/:id").delete(deleteBook);
router.route("/category/:category").get(getBooksByCategory);

export default router;
