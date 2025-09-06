import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "TV & Movie Discovery App",
      description:
        "AI-assisted TV & movie discovery with streaming availability and ultra-fast detail pages.",
      dates: "July 2024 – August 2025",
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
          src: "/screenshots/glimpse/glimpse_title.webp",
          alt: "Glimpse — title",
        },
        {
          src: "/screenshots/glimpse/glimpse_person.webp",
          alt: "Glimpse — person",
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
          src: "/screenshots/glimpse/glimpse_landing_page.webp",
          alt: "Glimpse — landing page",
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
        {
          src: "/screenshots/glimpse/glimpse_providers_details.webp",
          alt: "Glimpse — providers details",
        },
        {
          src: "/screenshots/glimpse/glimpse_season.webp",
          alt: "Glimpse — season",
        },
        {
          src: "/screenshots/glimpse/glimpse_seasons.webp",
          alt: "Glimpse — seasons",
        },
      ],
    },
    {
      title: "Stock-Matic",
      description:
        "Stock‑Matic is a fast, SSR/ISR Next.js stock dashboard with dynamic ticker routing and search. It delivers instant, server‑rendered charts plus news, backed by a Vercel serverless Express API integrating Yahoo Finance, Polygon.io, and Finnhub with automatic failover.",
      dates: "January, September 2025",
      tech: ["Express.js", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://physiqueiq.app",
      liveLabel: "Live",
      highlights: [
        "SSR/ISR Next.js dashboard with sharable SEO friendly ticker urls and search.",
        "Interactive, theme‑aware charts (20y, zoom presets).",
        "Serverless API (Express) with Yahoo/Polygon/Finnhub + failover.",
      ],
      challenges: [
        "Yahoo API flakiness → implemented redundant API fallbacks",
        "Theme SSR hydration mismatches → next‑themes guards",
      ],
      images: [
        {
          src: "/screenshots/stock-matic/stock-matic_ticker.png",
          alt: "Stock-matic ticker",
        },
      ],
    },
    {
      title: "PhysiqueIQ — Landing & Waitlist",
      description:
        "I built the landing page and early-access funnel for PhysiqueIQ, a mobile app that makes physique progress measurable and visual through guided photos, body metrics, and AI-driven insights. The page introduces the product vision and captures verified sign-ups for the beta.",
      dates: "September 2025",
      tech: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://physiqueiq.app",
      liveLabel: "Live",
      highlights: [
        "Double opt-in waitlist (Resend) with Supabase storage",
        "Bot protection via Cloudflare Turnstile",
        "Fast, responsive UI deployed on Vercel",
      ],
      challenges: [
        "Preventing bots from joining waitlist",
        "Integrating Resend for email confirmation",
      ],
      images: [
        {
          src: "/screenshots/physiqueiq_site/physiqueiq_site_landing.png",
          alt: "PhysiqueIQ Landing",
        },
      ],
    },
    {
      title: "React Weather App",
      description:
        "Real-time weather dashboard with radar and geolocation search.",
      dates: "June 2023 – August 2023",
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
      title: "PhysiqueIQ — AI Physique Analyzer",
      description:
        "Estimates body-part measurements and symmetry from standardized photos, visualizes change over time, and offers simple periodized templates. On-device computer vision with in-house pose/measurement models (in training)",
      dates: "August 2025 – Present",
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
        "Timelines, body-part trend charts, and symmetry scores",
        "Hypertrophy templates & specialization cycles (export to Hevy/CSV/PDF)",
      ],
      challenges: [
        "Dataset collection/labeling for relaxed poses across lighting, distances, and physiques",
        "UX for pose standardization",
        "Privacy and on-device processing",
      ],
      badge: "In progress",
    },
    {
      title: "GloboLingo – Language Learning App",
      description:
        "Desktop app that teaches vocabulary with natural TTS and testable modules.",
      dates: "August 2024 - December 2024",
      tech: ["Java", "JavaFX", "AWS Polly", "JUnit"],
      codeUrl: "https://github.com/ay-Lucas/Globo-Lingo",
      highlights: [
        "Led 4-person Scrum team; modular OOP",
        "AWS Polly text-to-speech for accessibility and engagement",
        "100% JUnit coverage with CI",
      ],
    },
    {
      title: "Weather Channel CLI",
      description:
        "Go CLI fetching hourly/daily forecasts from undocumented endpoints",
      dates: "November 2023",
      tech: ["Go", "Colly"],
      codeUrl: "https://github.com/ay-Lucas/weather-channel-cli",
      highlights: [
        "Reverse-engineered Weather.com endpoints",
        "Resilient scraping (retries/backoff)",
        "Structured CLI output",
      ],
    },
    {
      title: "Google Calendar CLI",
      description:
        "Implemented OAuth 2.0 and REST calls to manage calendar events from the terminal.",
      dates: "August 2023",
      tech: ["Node.js", "Express"],
      codeUrl: "https://github.com/ay-Lucas/google-calendar-cli",
      highlights: [
        "OAuth 2.0 authentication",
        "Create, list, and delete events",
        "Configurable calendars and profiles",
      ],
    },
  ];
  return (
    <section
      id="projects"
      className="py-20 md:py-24 border-t border-zinc-200/60 dark:border-white/10"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-12">
        Projects
      </h2>
      <div
        className="grid gap-8 grid-cols-1 lg:grid-cols-2             
        [&>*:first-child]:col-span-2
[&>*:nth-child(2)]:col-span-2
[&>*:nth-child(3)]:col-span-2
[&>*:nth-child(4)]:col-span-2
[&>*:nth-child(5)]:col-span-2

"
      >
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
