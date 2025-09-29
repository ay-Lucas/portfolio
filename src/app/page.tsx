import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main id="content" className="min-h-screen">
      <NavBar />
      <div className="w-screen">
        <div className="max-w-5xl mx-auto px-4 md:px-6 w-full space-y-10 md:space-y-12">
          <Hero />
          <About />
          <Reveal variant="slide-up" delay={150}>
            <Socials />
          </Reveal>
          <Projects />
        </div>
      </div>
      <Footer />
    </main>
  );
}
