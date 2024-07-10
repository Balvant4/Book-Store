import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// routes import
import bookRouter from "../src/routes/books.routes.js";

// route declaration
app.use("/api/books", bookRouter);

export { app };
