import express from "express";
import proxy from "express-http-proxy";
import cors from "cors";
// import config from "../config/default";
import log from "../utils/logger";

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Services
app.use("/", proxy("http://localhost:8001"));
// app.use("/", proxy("http://localhost:8001"));

export default app;
