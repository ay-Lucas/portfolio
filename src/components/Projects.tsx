import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "PhysiqueIQ — AI Physique Analyzer",
      description:
        "Estimates body-part measurements and symmetry from standardized photos, visualizes change over time, and offers simple periodized templates. On-device computer vision with in-house pose/measurement models (in training)",
      tech: [
        "React Native (Expo)",
        "TypeScript",
        "Express.js",
        "Supabase (Auth, Postgres, RLS)",
        "VisionCamera (frame processors)",
        "TensorFlow Lite / MediaPipe",
        "PyTorch (model training)",
        "ONNX / Core ML conversion",
      ],
      liveUrl:
        "mailto:join@physiqueiq.app?subject=PhysiqueIQ%20Waitlist&body=Name:%0APlatform%20(iOS/Android):%0AFitness%20goal%20(optional):",
      liveLabel: "Join the waitlist",
      highlights: [
        "Custom vision models for landmarks, silhouette, and tape-measure proxies (on-device)",
        "Pose guidance and alignment overlays for repeatable progress photos",
        "Timelines, body-part trend charts, and symmetry scores",
        "Goal-based hypertrophy templates & specialization cycles (export to Hevy/CSV/PDF)",
        "Weekly insights that surface changes and simple focus cues",
      ],
      challenges: [
        "Dataset collection/labeling for relaxed poses across lighting, distances, and physiques",
        "Model compression/quantization and cross-device calibration for reliable cm estimates",
        "Pose standardization UX to minimize measurement variance between sessions",
        "Subscriptions, entitlements, and strict image privacy guarantees",
      ],
      badge: "In progress",
    },
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
    <section id="projects" className="py-20 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-12">
        Projects
      </h2>
      <div
        className="grid gap-8 grid-cols-1 lg:grid-cols-2             
            [&>*:first-child]:col-span-2
[&>*:nth-child(2)]:col-span-2
[&>*:nth-child(3)]:col-span-2

"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
