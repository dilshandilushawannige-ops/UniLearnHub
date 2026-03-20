import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import corsOptions from "./config/cors.js";
import indexRoutes from "./routes/index.js";
import { notFoundHandler, errorHandler } from "./middlewares/error.middleware.js";

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({ message: "UniLearnHub API is running" });
});

app.use("/api", indexRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
