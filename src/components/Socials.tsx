import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Socials() {
  const socials = [
    { icon: <FaGithub />, url: "https://github.com/ay-Lucas" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/lucas-c-anderson" },
    { icon: <FaEnvelope />, url: "mailto:lucas@lucasanderson.dev" },
  ];
  return (
    <div className="flex justify-center space-x-6 text-2xl mb-12">
      {socials.map((s, idx) => (
        <a
          key={idx}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
