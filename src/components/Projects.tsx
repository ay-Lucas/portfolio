import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "TV & Movie Discovery App",
      description:
        "Cut page-load times 50% with SSR & streaming; built personalized recommendations, search, and watchlists; optimized queries; secure OAuth.",
      tech: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://glimpse.lucasanderson.dev",
      codeUrl: "https://github.com/ay-lucas/glimpse",
    },
    {
      title: "React Weather App",
      description:
        "Responsive dashboard with real-time forecasts and radar; enhanced UX with Material UI and geolocation search.",
      tech: ["JavaScript", "React", "Tailwind CSS"],
      liveUrl: "https://weather.lucasanderson.dev",
      codeUrl: "https://github.com/ay-lucas/weather-app",
    },
    {
      title: "GloboLingo – Language Learning App",
      description:
        "Led 4-person Scrum team; integrated AWS Polly TTS; achieved 100% test coverage with JUnit.",
      tech: ["Java", "JavaFX", "AWS Polly", "JUnit"],
      codeUrl: "https://github.com/ay-Lucas/Globo-Lingo",
    },
    {
      title: "Weather Channel CLI",
      description:
        "Reverse-engineered undocumented API in Go with Colly to scrape real-time weather data; built flexible CLI for hourly/daily forecasts.",
      tech: ["Go", "Colly"],
      codeUrl: "https://github.com/ay-Lucas/weather-channel-cli",
    },
    {
      title: "Google Calendar CLI",
      description:
        "Implemented OAuth 2.0 and REST calls to manage calendar events from the terminal.",
      tech: ["Node.js", "Express"],
      codeUrl: "https://github.com/ay-Lucas/google-calendar-cli",
    },
  ];
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
