import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Handshake from "/public/handshake.svg";
export default function SocialVerticalBar({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`shadow-md grid grid-cols-1 place-items-center p-2 ml-2 bg-black/30 h-60 rounded-xl items-center w-12 ${className}`}
    >
      <a href="https://www.linkedin.com/in/lucas-c-anderson/">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="w-8 h-8 transition-colors hover:text-sky-200"
        />
      </a>
      <a href="https://github.com/ay-lucas">
        <FontAwesomeIcon
          icon={faGithub}
          className="w-8 h-8 transition-colors hover:text-sky-200"
        />
      </a>
      <a href="https://sc.joinhandshake.com/profiles/r6jz3b">
        <Handshake className="w-8 h-8 transition-colors hover:text-sky-200" />
      </a>
    </div>
  );
}
