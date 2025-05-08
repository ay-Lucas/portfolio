import ProjectCard from "@/components/ProjectCard";
import SocialVerticalBar from "@/components/SocialVerticalBar";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="bg-gradient-to-r from-sky-500 to-sky-600 animate-gradient-x">
        <div className="grid grid-cols-3 h-96 items-center">
          <div>
            <SocialVerticalBar />
          </div>
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
      <div className="md:w-1/2 md:p-0 w-full p-5 mx-auto space-y-6">
        <h1 className="text-3xl font-bold drop-shadow-sm pt-6 text-center">
          Recent Projects
        </h1>
        <ProjectCard
          title="TV & Movie Discovery App"
          content={
            <ul className="list-disc ml-6 backdrop-blur-xl">
              <li>
                Developed a scalable web app with an intuitive UI, simplifying
                movie/TV discovery for users through personalized
                recommendations, watchlists, and search tools.
              </li>
              <li>
                Utilized PostgreSQL to store user profiles and watchlists,
                implementing secure authentication with NextAuth.
              </li>
              <li>
                Optimized page load times by 50% using component streaming and
                server-side rendering, enhancing UX.
              </li>
              <li>
                Hosted on Vercel for rapid deployment and on DigitalOcean with
                Docker and Nginx, ensuring scalability and reliability in
                production.
              </li>
            </ul>
          }
        />
        <ProjectCard
          title="React Weather App"
          content={
            <ul className="list-disc ml-6 backdrop-blur-xl">
              <li>
                Created a responsive weather app with a seamless interface,
                providing real-time forecasts and radar visuals through
                integrated APIs.
              </li>
              <li>
                Implemented a location search feature, enabling users to
                personalize weather updates and receive accurate,
                region-specific data.
              </li>
              <li>
                Designed a dynamic forecast carousel to simplify navigation and
                improve app usability.
              </li>
            </ul>
          }
        />
      </div>
    </main>
  );
}
