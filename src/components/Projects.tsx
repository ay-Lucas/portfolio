import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const projects = [
    {
      title: "Glimpse",
      description:
        "A movie and TV discovery app that combines streaming availability with mood-based recommendations.",
      dates: "Jul 2024 – Aug 2025",
      tech: ["TypeScript", "React", "Next.js", "PostgreSQL", "Tailwind CSS"],
      role: "Independent project",
      liveUrl: "https://glimpse.lucasanderson.dev",
      codeUrl: "https://github.com/ay-lucas/glimpse",
      highlights: [
        "Cut page loads ~75% and third-party API calls ~90% with Redis, server rendering, and image optimization",
        "Built and cached mood-based OpenAI recommendations to reduce latency and cost",
        "Shipped search, streaming availability, accounts, watchlists, and protected API routes",
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
      title: "PhysiqueIQ",
      description:
        "A mobile check-in app that estimates body measurements from progress photos and tracks changes over time.",
      dates: "Aug 2025 – May 2026",
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
      role: "Technical lead, five-person capstone team",
      liveUrl: "https://physiqueiq.app",
      codeNote: "Private repository",
      highlights: [
        "Set the architecture for the Next.js site, Expo app, Express API, and Supabase backend",
        "Built email and social auth plus a photo-scan pipeline using Supabase Storage and OpenAI",
        "Coordinated work across five teammates and added Jest and Maestro regression coverage",
      ],
      badge: "Capstone project",
      images: [
        {
          src: "/screenshots/physiqueiq/physiqueiq-site 3 app screen renders section.png",
          alt: "PhysiqueIQ app renders",
        },
        {
          src: "/screenshots/physiqueiq/physiqueiq-site demo section.png",
          alt: "PhysiqueIQ demo",
        },
        {
          src: "/screenshots/physiqueiq_site/physiqueiq_site_landing.png",
          alt: "PhysiqueIQ Landing",
        },
      ],
    },
    {
      title: "Stock-Matic",
      description:
        "A market dashboard for searching public companies and exploring decades of price history and news.",
      dates: "2025",
      tech: ["Express.js", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://stock-matic.lucasanderson.dev",
      highlights: [
        "Built server-rendered ticker pages with shareable URLs and interactive charts",
        "Made more than 50 years of market data explorable with range controls and zoom",
        "Added response validation and automatic provider failover to handle API outages",
      ],
      images: [
        {
          src: "/screenshots/stock-matic/stock-matic_ticker.png",
          alt: "Stock-matic ticker",
        },
      ],
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather app with location search, daily forecasts, and interactive radar.",
      dates: "Jun 2023 – Aug 2023",
      tech: ["JavaScript", "React", "Tailwind CSS"],
      liveUrl: "https://weather.lucasanderson.dev",
      codeUrl: "https://github.com/ay-lucas/weather-app",
      highlights: [
        "Built the forecast, geolocation search, and radar experience for desktop and mobile",
        "Kept map panning and zooming smooth by reducing unnecessary React renders",
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
      title: "GloboLingo",
      description:
        "A desktop app for learning vocabulary through spoken examples and built-in practice.",
      dates: "Aug 2024 – Dec 2024",
      tech: ["Java", "JavaFX", "AWS Polly", "JUnit"],
      role: "Team lead, four-person Scrum team",
      codeUrl: "https://github.com/ay-Lucas/Globo-Lingo",
      highlights: [
        "Ran sprint planning, managed the backlog, and reviewed code across the team",
        "Integrated AWS Polly text-to-speech and reached 100% JUnit coverage in CI",
      ],
    },
    {
      title: "Weather Channel CLI",
      description:
        "A Go CLI for getting Weather.com forecasts without leaving the terminal.",
      dates: "Nov 2023",
      tech: ["Go", "Colly"],
      codeUrl: "https://github.com/ay-Lucas/weather-channel-cli",
      highlights: [
        "Reverse-engineered undocumented endpoints for hourly and daily forecasts",
        "Added retries and exponential backoff to make requests more reliable",
      ],
    },
    {
      title: "Google Calendar CLI",
      description:
        "A Node.js CLI for managing Google Calendar events across multiple calendars and profiles.",
      dates: "Aug 2023",
      tech: ["Node.js", "Express"],
      codeUrl: "https://github.com/ay-Lucas/google-calendar-cli",
      highlights: [
        "Implemented OAuth 2.0 authentication",
        "Supported creating, listing, and deleting events from configurable calendars",
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
          Selected Work
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
