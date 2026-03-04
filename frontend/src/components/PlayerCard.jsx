import { Link } from "react-router-dom";
import { memo } from "react";

function PlayerCard({ player }) {
  return (
    <Link
      to={`/players/${player._id}`}
      className="bg-gray-900 p-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
    >
      <img
        src={`/assets/players/${player._id}.jpg`}
        onError={(e) => (e.target.src = "/assets/players/placeholder.jpg")}
        alt={player.fullName}
        className="h-48 w-full object-cover rounded-lg"
      />
      <h3 className="mt-3 text-lg font-bold text-white">
        {player.fullName}
      </h3>
      <p className="text-gray-400">{player.position} • {player.club}</p>
      <p className="text-green-400 font-semibold mt-2">
        Goals: {player.goals}
      </p>
    </Link>
  );
}

export default memo(PlayerCard);
