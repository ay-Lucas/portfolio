export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Me</h2>
      <p className="mb-4 text-lg leading-7 md:text-[1.1rem] md:leading-8 max-w-prose md:max-w-none">
        I’m Lucas Anderson, CS ’26 at the University of South Carolina. I ship
        fast, reliable web apps end to end— TypeScript/Next.js on the frontend,
        Node/PostgreSQL on the backend, deployed on Vercel. Recently, I cut page
        load time by ~75% and external API calls by ~90% on a media discovery
        app. I also added AI recommendations (OpenAI), type‑safe Edge APIs with
        Zod, and features like auth, search, and watchlists. I’m currently
        building PhysiqueIQ in React Native as my capstone and exploring
        monetization
      </p>
      <p className="text-lg leading-7 md:text-[1.1rem] md:leading-8 max-w-prose md:max-w-none">
        Seeking New Grad Software Engineer roles (May 2026) and open to
        part-time during the school year. I thrive on product-focused teams
        building web platforms, developer tools, or content/search.
      </p>
    </section>
  );
}
