import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "TV & Movie Discovery App",
      description:
        "AI-assisted TV & movie discovery with streaming availability and ultra-fast detail pages.",
      tech: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://glimpse.lucasanderson.dev",
      codeUrl: "https://github.com/ay-lucas/glimpse",
      highlights: [
        "~75% faster loads & ~90% fewer API calls via Next.js Server Components, ISR, Redis, and LQIP/CDN",
        "AI “mood/vibe” recommendations (OpenAI) with cached results for low latency/cost.",
        "Typed Edge APIs (Zod), Supabase Auth (JWT/RLS), Drizzle; search + watchlists.",
      ],
      challenges: [
        "API quotas → precomputed pools + Redis warmers → ~90% fewer external calls",
        "Slow LCP → Server Components + ISR + LQIP/CDN → ~75% faster loads",
      ],
      images: [
        {
          src: "/screenshots/glimpse/glimpse_homepage.webp",
          alt: "Glimpse — homepage",
        },
        {
          src: "/screenshots/glimpse/glimpse_landing_page.webp",
          alt: "Glimpse — landing page",
        },
        {
          src: "/screenshots/glimpse/glimpse_mood_match.webp",
          alt: "Glimpse — mood match view",
        },
        {
          src: "/screenshots/glimpse/glimpse_search_demo.webp",
          alt: "Glimpse — search results",
        },
        {
          src: "/screenshots/glimpse/glimpse_signin.webp",
          alt: "Glimpse — sign in",
        },
        {
          src: "/screenshots/glimpse/glimpse_tv_page_dropdown.webp",
          alt: "Glimpse — TV page details",
        },
        {
          src: "/screenshots/glimpse/glimpse_watchlists.webp",
          alt: "Glimpse — watchlists",
        },
        {
          src: "/screenshots/glimpse/glimpse_mobile_homepage.webp",
          alt: "Glimpse — mobile homepage",
        },
      ],
    },
    {
      title: "React Weather App",
      description:
        "Real-time weather dashboard with radar and geolocation search.",
      tech: ["JavaScript", "React", "Tailwind CSS"],
      liveUrl: "https://weather.lucasanderson.dev",
      codeUrl: "https://github.com/ay-lucas/weather-app",
      highlights: [
        "Responsive dashboard with real-time forecasts and radar overlays",
        "Geolocation search + clean, mobile-first UI",
      ],
      challenges: [
        "Choppy map tiles → memoized layers + debounced renders → smooth pan/zoom",
      ],
      images: [
        {
          src: "/screenshots/weather/weather_top.webp",
          alt: "Weather App — top",
        },
        {
          src: "/screenshots/weather/weather_search_dropdown.webp",
          alt: "Weather App — search dropdown",
        },
        {
          src: "/screenshots/weather/weather_bottom.webp",
          alt: "Weather App — bottom",
        },
        {
          src: "/screenshots/weather/weather_daily_accordion.webp",
          alt: "Weather App — daily accordion opened",
        },
        {
          src: "/screenshots/weather/weather_mobile_top.webp",
          alt: "Weather App — mobile top",
        },
        {
          src: "/screenshots/weather/weather_mobile_radar.webp",
          alt: "Weather App — mobile radar",
        },
        {
          src: "/screenshots/weather/weather_mobile_daily.webp",
          alt: "Weather App — mobile daily",
        },
        {
          src: "/screenshots/weather/weather_mobile_daily_accordion.webp",
          alt: "Weather App — mobile daily accordion",
        },
      ],
    },
    {
      title: "GloboLingo – Language Learning App",
      description:
        "Desktop app that teaches vocabulary with natural TTS and testable modules.",
      tech: ["Java", "JavaFX", "AWS Polly", "JUnit"],
      codeUrl: "https://github.com/ay-Lucas/Globo-Lingo",
      highlights: [
        "Led 4-person Scrum team; modular OOP",
        "AWS Polly text-to-speech for accessibility and engagement",
        "100% JUnit coverage with CI",
      ],
    },
    {
      title: "Google Calendar CLI",
      description:
        "Implemented OAuth 2.0 and REST calls to manage calendar events from the terminal.",
      tech: ["Node.js", "Express"],
      codeUrl: "https://github.com/ay-Lucas/google-calendar-cli",
      highlights: [
        "OAuth 2.0 authentication",
        "Create, list, and delete events",
        "Configurable calendars and profiles",
      ],
    },
    {
      title: "Weather Channel CLI",
      description:
        "Go CLI fetching hourly/daily forecasts from undocumented endpoints",
      tech: ["Go", "Colly"],
      codeUrl: "https://github.com/ay-Lucas/weather-channel-cli",
      highlights: [
        "Reverse-engineered Weather.com endpoints",
        "Resilient scraping (retries/backoff)",
        "Structured CLI output",
      ],
    },
  ];
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-8 grid-cols-1">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
