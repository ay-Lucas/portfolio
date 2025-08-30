export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">About Me</h2>
      <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
        New‑grad May ’26 • Open to part‑time now • React/Next.js, TypeScript,
        Node, Postgres • Vercel/CI/CD
      </div>
      <p className="mb-4 text-lg leading-7 md:text-[1.1rem] md:leading-8 max-w-prose md:max-w-none">
        I ship fast, reliable web apps end to end. Recently, I cut page load
        time by ~75% and external API calls by ~90% on a
        <a
          href="https://glimpse.lucasanderson.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          {" "}
          media discovery app
        </a>
        . I also added AI recommendations (OpenAI), type‑safe Edge APIs with
        Zod, and shipped auth, streaming providers, search, and watchlists. I’m
        currently working on PhysiqueIQ in React Native.
      </p>
      <p className="text-lg leading-7 md:text-[1.1rem] md:leading-8 max-w-prose md:max-w-none">
        I’m primarily seeking New Grad Software Engineer roles (May 2026) and
        open to part‑time work during the school year. I thrive on
        product‑focused teams building web platforms, developer tools, or
        content/search.
      </p>
    </section>
  );
}
