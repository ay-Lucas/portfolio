export default function Hero() {
  return (
    <section className="text-center py-24 bg-gray-50 dark:bg-gray-800">
      <h1 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-sky-500 to-indigo-600 bg-[length:200%_200%] animate-gradient-x bg-clip-text text-transparent mb-4">
        Hi, I’m Lucas Anderson
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        BS in Computer Science ’26 • Building fast, scalable web apps
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        className="inline-block px-6 py-3 border-2 border-gray-900 dark:border-gray-100 rounded-full text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        Download Résumé
      </a>
    </section>
  );
}
