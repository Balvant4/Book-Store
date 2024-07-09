import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// routes import
import bookRouter from "../src/routes/user.routes.js";

// route declaration
app.use("/api/books", bookRouter);

export { app };
