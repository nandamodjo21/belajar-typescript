import express from "express";
import { publicRoute } from "../routes/public_api";
import { errorMiddleware } from "../middleware/error_middleware";

export const app = express();

app.use(express.json());
app.use(publicRoute);
app.use(errorMiddleware);
