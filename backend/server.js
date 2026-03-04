import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import authController from "./src/controllers/auth.controller.js";
import playerController from "./src/controllers/player.controller.js";
import walletController from "./src/controllers/wallet.controller.js";
import transactionController from "./src/controllers/transaction.controller.js";
import { errorHandler } from "./src/middleware/error.middleware.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authController);
app.use("/api/players", playerController);
app.use("/api/wallet", walletController);
app.use("/api/transactions", transactionController);

// Error handler
app.use(errorHandler);

// Connect DB and start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log(err));
