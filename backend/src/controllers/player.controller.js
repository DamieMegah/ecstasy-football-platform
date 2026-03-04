import asyncHandler from "../middleware/asyncHandler.js";
import { getPlayers } from "../services/player.service.js";
import Player from "../models/player.model.js";

export const fetchPlayers = asyncHandler(async (req, res) => {
  const players = await getPlayers(req.query);

  res.json({
    success: true,
    data: players
  });
});

export const fetchSinglePlayer = asyncHandler(async (req, res) => {
  const player = await Player.findById(req.params.id);

  if (!player) {
    res.status(404);
    throw new Error("Player not found");
  }

  res.json({
    success: true,
    data: player
  });
});
