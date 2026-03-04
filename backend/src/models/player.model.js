import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  fullName: { type: String, required: true, index: true },
  age: Number,
  nationality: { type: String, index: true },
  position: { type: String, index: true },
  club: { type: String, index: true },
  appearances: Number,
  goals: Number,
  assists: Number,
  yellowCards: Number,
  redCards: Number,
  passAccuracy: Number,
  minutesPlayed: Number,
  injuryStatus: String,
  recentForm: [Number],
  marketValue: Number,
  performanceTrend: String
}, { timestamps: true });

export default mongoose.model("Player", playerSchema);
