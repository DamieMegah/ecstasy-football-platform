import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-16 p-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <FontAwesomeIcon icon={faGithub} className="hover:text-white transition" />
        <FontAwesomeIcon icon={faTwitter} className="hover:text-white transition" />
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Ecstacy Football Platform. All rights reserved.
      </p>
    </footer>
  );
}
