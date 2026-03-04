import { useEffect, useState, useMemo } from "react";
import * as playerAPI from "../api/player.api";
import PlayerCard from "../components/PlayerCard";
import Loader from "../components/common/Loader";
import ErrorState from "../components/common/ErrorState";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await playerAPI.getPlayers({ page, ...filters });
        setPlayers(res.data);
      } catch (err) {
        setError("Failed to load players");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [page, filters]);

  const playerList = useMemo(
    () =>
      players.map((p) => <PlayerCard key={p._id} player={p} />),
    [players]
  );

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} />;

  return (
    <div className="p-4 grid md:grid-cols-3 gap-4">
      {playerList}
      <div className="col-span-full flex justify-center gap-4">
        <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
          Prev
        </button>
        <button onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

