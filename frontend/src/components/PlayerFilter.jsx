import { useState } from "react";

export default function PlayerFilter({ onFilter }) {
  const [position, setPosition] = useState("");
  const [club, setClub] = useState("");
  const [minGoals, setMinGoals] = useState(0);

  const handleFilter = () => {
    onFilter({ position, club, minGoals });
  };

  return (
    <div className="bg-gray-900 p-4 rounded-xl flex flex-col md:flex-row gap-4 mb-6 animate-fade-in">
      <select
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
      >
        <option value="">All Positions</option>
        <option value="FWD">Forward</option>
        <option value="MID">Midfielder</option>
        <option value="DEF">Defender</option>
        <option value="GK">Goalkeeper</option>
      </select>

      <input
        type="text"
        placeholder="Club"
        value={club}
        onChange={(e) => setClub(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
      />

      <input
        type="number"
        placeholder="Min Goals"
        value={minGoals}
        onChange={(e) => setMinGoals(e.target.value)}
        className="p-2 rounded bg-gray-800 text-white"
      />

      <button
        onClick={handleFilter}
        className="bg-green-600 px-4 py-2 rounded hover:bg-green-500 transition"
      >
        Apply Filter
      </button>
    </div>
  );
}
