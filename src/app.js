import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ limit: "20kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// router import

import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js"

// routes declaration

app.use("/api/v1/users", userRouter);
app.use("/api/v1/video",videoRouter);

export { app };
