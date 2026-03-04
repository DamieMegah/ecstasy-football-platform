import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ErrorState({ message }) {
  return (
    <div className="flex flex-col items-center py-16 text-center animate-fade-in">
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        className="text-3xl text-red-500"
      />
      <p className="mt-4 text-red-400 font-medium">{message}</p>
    </div>
  );
}
