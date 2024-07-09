import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// routes import
import userRouter from "../src/routes/user.routes.js";

// route declaration
app.use("api/v1/users", userRouter);

export { app };
