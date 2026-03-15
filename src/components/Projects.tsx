import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const projects = [
    {
      title: "TV & Movie Discovery App",
      description:
        "Movie and TV discovery app with streaming availability, fast detail pages, and AI recommendations based on mood.",
      dates: "July 2024 – August 2025",
      tech: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind CSS"],
      role: "Sole engineer",
      architecture:
        "Next.js app with Supabase auth, Postgres, Redis caching, and server-rendered pages",
      impact:
        "~75% faster loads and ~90% fewer external API calls after caching and rendering optimizations",
      liveUrl: "https://glimpse.lucasanderson.dev",
      codeUrl: "https://github.com/ay-lucas/glimpse",
      highlights: [
        "Cut load times by about 75% and external API calls by about 90%",
        "Built AI recommendations with cached results to keep responses fast and costs low",
        "Shipped auth, search, watchlists, and protected API routes",
      ],
      challenges: [
        "Worked around API limits with precomputed results and Redis warmers",
        "Improved page speed with server rendering, caching, and image optimization",
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
        "Stock dashboard with searchable ticker pages, server-rendered charts, and market news powered by a backend that falls back across multiple data providers.",
      dates: "January, September 2025",
      tech: ["Express.js", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      role: "Sole engineer",
      architecture:
        "Next.js frontend with a serverless Express API and fallback across multiple market data providers",
      impact:
        "Built interactive dashboards over 50+ years of market data with validation and failover built into the API layer",
      liveUrl: "https://stock-matic.lucasanderson.dev",
      liveLabel: "Live",
      highlights: [
        "Built searchable ticker pages with shareable URLs and server-rendered content",
        "Added interactive charts with long-range views and zoom controls",
        "Used multiple market data providers so the app can recover from API outages",
      ],
      challenges: [
        "Handled unreliable provider responses by adding fallback data sources",
        "Fixed theme hydration issues between server and client rendering",
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
        "End-to-end physique tracking product covering the public website, mobile app, and backend scan flow for photo-based measurement estimates.",
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
      role:
        "Project owner and technical lead for a 5-member capstone team",
      architecture:
        "Next.js website, React Native app, Express API, Supabase auth and storage, and a scan pipeline using OpenAI",
      impact:
        "Set the technical direction and shipped the public site, auth flows, scan processing, and regression checks",
      liveUrl: "https://physiqueiq.app",
      liveLabel: "Live",
      codeNote: "Code private",
      highlights: [
        "Owned the architecture across the site, mobile app, and backend",
        "Led a 5-member capstone team and kept delivery aligned across app and API work",
        "Built an `/api/scan` flow that uses Supabase Storage and OpenAI to estimate body measurements from check-in photos",
        "Added Supabase auth for email and social sign-in, plus Jest and Maestro coverage",
      ],
      challenges: [
        "Turned subjective progress tracking into a repeatable check-in flow",
        "Kept the website, mobile app, and backend moving together while several people shipped in parallel",
        "Balanced shipping speed with reliable auth, scan processing, and regression coverage",
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
      role: "Sole engineer",
      architecture:
        "React app with geolocation search, weather APIs, and interactive radar overlays",
      liveUrl: "https://weather.lucasanderson.dev",
      codeUrl: "https://github.com/ay-lucas/weather-app",
      highlights: [
        "Responsive dashboard with real-time forecasts and radar overlays",
        "Built geolocation search and a clean mobile-first interface",
      ],
      challenges: [
        "Smoothed out map panning and zooming by reducing unnecessary re-renders",
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
        "Desktop language learning app with text-to-speech and testable learning modules.",
      dates: "August 2024 - December 2024",
      tech: ["Java", "JavaFX", "AWS Polly", "JUnit"],
      role: "Led a 4-person Scrum team",
      codeUrl: "https://github.com/ay-Lucas/Globo-Lingo",
      highlights: [
        "Led a 4-person Scrum team and kept delivery organized across sprints",
        "AWS Polly text-to-speech for accessibility and engagement",
        "100% JUnit coverage with CI",
      ],
    },
    {
      title: "Weather Channel CLI",
      description:
        "Go CLI that fetches hourly and daily forecasts from undocumented Weather.com endpoints",
      dates: "November 2023",
      tech: ["Go", "Colly"],
      role: "Sole engineer",
      codeUrl: "https://github.com/ay-Lucas/weather-channel-cli",
      highlights: [
        "Reverse-engineered Weather.com endpoints",
        "Added retries and backoff to make scraping more reliable",
        "Structured CLI output",
      ],
    },
    {
      title: "Google Calendar CLI",
      description:
        "Command-line tool for creating, listing, and deleting Google Calendar events.",
      dates: "August 2023",
      tech: ["Node.js", "Express"],
      role: "Sole engineer",
      codeUrl: "https://github.com/ay-Lucas/google-calendar-cli",
      highlights: [
        "OAuth 2.0 authentication",
        "Create, list, and delete events",
        "Support for configurable calendars and profiles",
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
