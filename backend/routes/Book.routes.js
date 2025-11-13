import express from "express"
import { createBook,getBooks,deleteBook,updateBook,getBookById } from '../controllers/Book.controller.js'
import { authMiddleware } from "../middlewares/Auth.middleware.js";

export const bookRouter = express.Router()

bookRouter.post("/books",authMiddleware,createBook);
bookRouter.get("/books",getBooks);
bookRouter.delete("/books/delete/:id",authMiddleware,deleteBook);
bookRouter.put("/books/edit/:id",authMiddleware,updateBook);
bookRouter.get("/books/:id",getBookById);
