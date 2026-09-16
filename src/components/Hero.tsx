import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <div className="text-center py-24">
      <div className="flex justify-center">
        <Image
          src={"/profile-picture.png"}
          alt="profile picture"
          className="rounded-[50%] bg-white "
          width={200}
          height={200}
        />
      </div>
      <Reveal variant="slide-right">
        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-extrabold bg-gradient-to-r from-sky-500 to-indigo-600 bg-[length:200%_200%] animate-gradient-x bg-clip-text text-transparent mb-5">
          Hi, I’m Lucas Anderson
        </h1>
      </Reveal>
      <Reveal variant="fade" delay={150}>
        <p className="text-lg md:text-[1.1rem] leading-7 md:leading-8 text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Full-stack software engineer graduating in December 2026. I like
          turning rough product ideas into fast, useful software with
          TypeScript, React, Node.js, and PostgreSQL.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:lucas@lucasanderson.dev?subject=Software%20Engineer%20%E2%80%94%20Lucas%20Anderson"
            aria-label="Email Lucas"
            className="px-5 py-2.5 relative rounded-md group text-white font-medium inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded-md opacity-50 filter blur-sm bg-gradient-to-br from-black to-zinc-800"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-md opacity-50 from-black to-zinc-800"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-md shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-black to-zinc-800"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-md bg-gradient-to-br to-zinc-900 border border-zinc-800 from-zinc-800"></span>
            <span className="relative">Email Me</span>
          </a>
          <a
            href="/Lucas_Anderson_FullStack_Resume_2026.pdf"
            target="_blank"
            aria-label="View Lucas Anderson's resume"
            className="px-5 py-2.5 relative rounded-md group text-white font-medium inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded-md opacity-50 filter blur-sm bg-gradient-to-br from-indigo-600 to-sky-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-md opacity-50 from-indigo-600 to-sky-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-md shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-indigo-600 to-sky-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-md bg-gradient-to-br to-indigo-600 from-sky-500"></span>
            <span className="relative">View Resume</span>
          </a>
        </div>
        <div className="mt-4">
          <a
            href="#projects"
            className="text-sm text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 underline-offset-4 hover:underline"
          >
            See my work ↓
          </a>
        </div>
      </Reveal>
    </div>
  );
}
