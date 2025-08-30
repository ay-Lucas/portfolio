import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Socials() {
  const socials = [
    { icon: <FaGithub />, url: "https://github.com/ay-Lucas", label: "GitHub (opens in new tab)" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/lucas-c-anderson", label: "LinkedIn (opens in new tab)" },
    { icon: <FaEnvelope />, url: "mailto:lucas@lucasanderson.dev", label: "Email Lucas" },
  ];
  return (
    <div className="flex justify-center space-x-6 text-2xl mb-12">
      {socials.map((s, idx) => (
        <a
          key={idx}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="hover:text-blue-500 focus-visible:outline-none"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
