import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

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
      liveUrl: "https://stock-matic.lucasanderson.dev",
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
      title: "PhysiqueIQ",
      description:
        "End-to-end mobile physique tracking platform I owned from product design through implementation, spanning the public Next.js landing site, React Native app, and backend scan pipeline for AI-assisted measurement extraction.",
      dates: "August 2025 – Present",
      tech: [
        "React Native (Expo)",
        "TypeScript",
        "Next.js",
        "Express.js",
        "Supabase",
        "OpenAI",
        "Tailwind CSS",
        "Jest",
        "Maestro",
      ],
      liveUrl: "https://physiqueiq.app",
      liveLabel: "Live",
      highlights: [
        "Owned the architecture and technical direction across the landing site, mobile app, and backend systems",
        "Led a 5-member capstone team, coordinating delivery while keeping the React Native and API layers consistent",
        "Engineered an `/api/scan` pipeline using Supabase Storage and OpenAI to extract body measurements from check-in photos",
        "Built secure authentication with Supabase for email and OAuth sign-in, and added Jest and Maestro coverage to reduce regressions",
      ],
      challenges: [
        "Turning subjective physique progress into a repeatable photo-analysis workflow with standardized check-ins",
        "Keeping mobile, backend, and landing-site delivery aligned while multiple contributors shipped in parallel",
        "Balancing product velocity with reliable auth, scan processing, and regression coverage in an in-progress release",
      ],
      badge: "Live + in progress",
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
      <Reveal variant="slide-right" delay={150}>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 md:mb-12">
          Projects
        </h2>
      </Reveal>
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
          <Reveal variant="fade" delay={150} key={p.title}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
