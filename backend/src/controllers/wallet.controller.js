import Wallet from "../models/wallet.model.js";
import Transaction from "../models/transaction.model.js";
import asyncHandler from "../middleware/asyncHandler.js";

export const deposit = asyncHandler(async (req, res) => {
  const { amount } = req.body;

  if (amount <= 0) return res.status(400).json({ message: "Invalid amount" });

  const wallet = await Wallet.findOneAndUpdate(
    { user: req.user._id },
    { $inc: { balance: amount } },
    { new: true, upsert: true }
  );

  await Transaction.create({
    user: req.user._id,
    type: "deposit",
    amount
  });

  res.json(wallet);
});
