import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faWallet } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center justify-center text-center px-6 animate-fade-in">
      <h1 className="text-5xl font-bold mb-6">
        Football Investment Platform
      </h1>

      <p className="text-gray-400 max-w-xl mb-10">
        Explore detailed player statistics. Analyze performance trends.
        Build smarter financial decisions.
      </p>

      <div className="flex gap-6">
        <Link
          to="/players"
          className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-500 transition"
        >
          <FontAwesomeIcon icon={faChartLine} className="mr-2" />
          Explore Players
        </Link>

        <Link
          to="/wallet"
          className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition"
        >
          <FontAwesomeIcon icon={faWallet} className="mr-2" />
          Wallet
        </Link>
      </div>
    </div>
  );
}
