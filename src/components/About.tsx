import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <Reveal variant="fade">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">About Me</h2>
      </Reveal>
      <Reveal variant="fade" delay={150}>
        <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
          Columbia, SC • CS &#39;26, University of South Carolina • New‑grad May
          &#39;26 • Open to part‑time now • React/Next.js, TypeScript, Node,
          Postgres • Vercel/CI/CD
        </div>
        <p className="mb-4 text-lg leading-7 md:text-[1.1rem] md:leading-8 max-w-prose md:max-w-none">
          I build and ship full-stack products end to end, from UI and product
          direction through APIs, auth, data modeling, and deployment.
          Recently, I cut page load time by ~75% and external API calls by ~90%
          on a
          <a
            href="https://glimpse.lucasanderson.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {" "}
            media discovery app
          </a>
          . I also built AI recommendations (OpenAI), type-safe APIs, auth, and
          search/watchlist flows. On PhysiqueIQ, I own the technical direction
          across the landing site, mobile app, and backend while leading a
          5-person capstone team.
        </p>
        <p className="text-lg leading-7 md:text-[1.1rem] md:leading-8 max-w-prose md:max-w-none">
          I’m primarily seeking New Grad Software Engineer roles (May 2026) and
          open to part‑time work during the school year. I’m a strong fit for
          product-focused teams that value ownership, fast iteration, and solid
          engineering fundamentals across frontend, backend, and developer
          workflow.
        </p>
      </Reveal>
    </section>
  );
}
