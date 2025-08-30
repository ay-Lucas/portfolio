export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200/60 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
        <span>© {new Date().getFullYear()} Lucas Anderson</span>
        <div className="flex gap-4">
          <a href="mailto:lucas@lucasanderson.dev" className="hover:underline">lucas@lucasanderson.dev</a>
          <a href="https://linkedin.com/in/lucas-c-anderson" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/ay-Lucas" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

