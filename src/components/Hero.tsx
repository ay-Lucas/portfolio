export default function Hero() {
  return (
    <div className="text-center py-24">
      <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight font-extrabold bg-gradient-to-r from-sky-500 to-indigo-600 bg-[length:200%_200%] animate-gradient-x bg-clip-text text-transparent mb-5">
        Hi, I’m Lucas Anderson
      </h1>
      <p className="text-lg md:text-[1.1rem] leading-7 md:leading-8 text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        BS in Computer Science ’26 • Building fast, scalable web apps
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="mailto:lucas@lucasanderson.dev"
          className="inline-block px-6 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Open to Summer ’25
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-block px-6 py-3 border border-zinc-300 dark:border-zinc-700 rounded-full text-gray-900 dark:text-gray-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          Download Résumé
        </a>
      </div>
    </div>
  );
}
