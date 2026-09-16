import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <Reveal variant="fade">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">About</h2>
      </Reveal>
      <Reveal variant="fade" delay={150}>
        <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
          Columbia, South Carolina • B.S. Computer Science, expected Dec 2026 •
          Open to U.S. roles
        </div>
        <p className="mb-4 text-lg leading-7 md:text-[1.1rem] md:leading-8 max-w-prose md:max-w-none">
          I built
          <a
            href="https://glimpse.lucasanderson.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {" Glimpse"}
          </a>{" "}
          because I wanted a better way to find something to watch. It combines
          streaming availability with mood-based recommendations. I later
          reworked its rendering and caching, cutting page loads by about 75%
          and third-party API calls by about 90%.
        </p>
        <p className="mb-4 text-lg leading-7 md:text-[1.1rem] md:leading-8 max-w-prose md:max-w-none">
          I also led a five-person capstone team that built PhysiqueIQ, a React
          Native app backed by Express and Supabase. I set the architecture,
          built the core auth and scan flows, and coordinated work across the
          mobile app and backend.
        </p>
        <p className="text-lg leading-7 md:text-[1.1rem] md:leading-8 max-w-prose md:max-w-none">
          I currently work as a Sales Advisor at Best Buy. I’m open to part-time
          software engineering work while I finish school and full-time roles
          after I graduate in December 2026.
        </p>
      </Reveal>
    </section>
  );
}
