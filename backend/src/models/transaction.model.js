import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["deposit", "withdraw"], required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "completed" }
}, { timestamps: true });

export default mongoose.model("Transaction", transactionSchema);
