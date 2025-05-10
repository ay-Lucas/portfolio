import NavBar from "@/components/NavBar";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="bg-gradient-to-r from-sky-500 to-sky-600 animate-gradient-x">
        <NavBar />
        <div className="h-96 grid place-content-center p-3">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl font-bold drop-shadow-sm">
              Lucas Anderson
            </h1>
            <h2 className="text-3xl font-bold drop-shadow-sm">
              Full Stack Web Developer
            </h2>
            <p className="text-xl font-bold">
              I build seamless and feature rich applications.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl md:p-0 w-full p-5 mx-auto space-y-6">
        <h1 className="text-3xl font-bold drop-shadow-sm pt-6 text-left">
          Projects
        </h1>
        <ProjectCard
          title="TV & Movie Discovery App"
          content={
            <ul className="list-disc ml-6 backdrop-blur-xl">
              <li>
                Cut page-load times 50% with component streaming and SSR,
                boosting Core Web Vitals.
              </li>
              <li>
                Built a personalized discovery experience (recommendations,
                watchlists, search) for TV & movies.
              </li>
              <li>
                Optimized query performance via Drizzle ORM and PostgreSQL
                indexing, ensuring fast data retrieval under load.
              </li>
              <li>
                Deployed secure OAuth (NextAuth) through CI/CD on Vercel for
                zero‑downtime releases.
              </li>
            </ul>
          }
        />
        <ProjectCard
          title="React Weather App"
          content={
            <ul className="list-disc ml-6 backdrop-blur-xl">
              <li>
                Developed a responsive weather dashboard with real‑time
                forecasts and radar (Visual Crossing, RainViewer).
              </li>
              <li>
                Enhanced UX with Material UI and geolocation‑based search,
                lifting average time‑on‑site.
              </li>
            </ul>
          }
        />
      </div>
    </main>
  );
}
