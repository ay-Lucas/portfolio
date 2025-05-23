import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <div className="w-screen">
        <div className="max-w-4xl md:p-0 w-full p-5 mx-auto space-y-6">
          <Hero />
          <About />
          <Socials />
          <Projects />
        </div>
      </div>
    </main>
  );
}
