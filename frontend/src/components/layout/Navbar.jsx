import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav
      className={`p-4 flex justify-between items-center transition-colors ${
        dark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src="/assets/logo.png" alt="logo" className="h-8" />
        <span className="font-bold">Ecstasy Football</span>
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/players" className="hover:underline">
          Players
        </Link>
        {user && (
          <>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/wallet" className="hover:underline">
              Wallet
            </Link>
          </>
        )}
        {!user ? (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            className={`px-3 py-1 rounded ${
              dark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
            } transition`}
          >
            Logout
          </button>
        )}

        <button
          onClick={toggle}
          className={`p-2 rounded transition ${
            dark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <FontAwesomeIcon icon={dark ? faSun : faMoon} />
        </button>
      </div>
    </nav>
  );
}
