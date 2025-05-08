import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Handshake from "/public/handshake.svg";
export default function NavBar({ className }: { className?: string }) {
  return (
    <div
      className={`shadow-xl w-full grid grid-cols-2 md:grid-cols-3 p-2 bg-black/100 backdrop-blur-xl items-center ${className}`}
    >
      <div className="grid grid-flow-col gap-2 md:col-start-2 md:justify-center justify-start">
        <button className="p-1">Projects</button>
        <button className="p-1">Resume</button>
        <button className="p-1">Contact</button>
      </div>
      <div className="grid grid-flow-col gap-3 items-center md:justify-center justify-end">
        <a href="https://www.linkedin.com/in/lucas-c-anderson/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-6 h- 6transition-colors hover:text-sky-200"
          />
        </a>
        <a href="https://github.com/ay-lucas">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-6 h-6 transition-colors hover:text-sky-200"
          />
        </a>
        <a href="https://sc.joinhandshake.com/profiles/r6jz3b">
          <Handshake className="w-[1.5rem] h-[1.5rem] transition-colors hover:text-sky-200" />
        </a>
      </div>
    </div>
  );
}
