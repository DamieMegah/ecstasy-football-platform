import Player from "../models/player.model.js";
import externalService from "./externalPlayer.service.js";

export const getPlayers = async (query) => {
  if (process.env.USE_EXTERNAL_API === "true") {
    return externalService.getPlayers(query);
  }

  const { page = 1, limit = 10, position, club, nationality, sort } = query;

  const filter = {};
  if (position) filter.position = position;
  if (club) filter.club = club;
  if (nationality) filter.nationality = nationality;

  const players = await Player.find(filter)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  return players;
};
