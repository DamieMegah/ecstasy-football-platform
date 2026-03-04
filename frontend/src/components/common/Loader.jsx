import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <FontAwesomeIcon
        icon={faFutbol}
        className="text-4xl text-green-500 animate-spin"
      />
      <p className="mt-4 text-gray-400">Loading...</p>
    </div>
  );
}
