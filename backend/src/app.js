import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/auth.routes.js";
import playerRoutes from "./routes/player.routes.js";
import walletRoutes from "./routes/wallet.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use(morgan("combined"));

app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200
}));

app.use("/api/auth", authRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/transactions", transactionRoutes);

app.use(errorHandler);

export default app;
