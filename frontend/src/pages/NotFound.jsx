import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white animate-fade-in">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-400 mb-6">Page not found</p>
      <Link
        to="/"
        className="bg-green-600 px-6 py-3 rounded hover:bg-green-500 transition flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faHome} />
        Go Home
      </Link>
    </div>
  );
}
