import Link from "next/link";

export default function NavBar({ className }: { className?: string }) {
  return (
    <div
      className={`shadow-xl w-full bg-black/100 backdrop-blur-xl items-center ${className}`}
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center py-3 px-6 md:px-0">
        <Link href="/" className="text-2xl font-bold hover:text-blue-500">
          Lucas Anderson
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="#about" className="hover:text-blue-500">
            About
          </Link>
          <Link href="#projects" className="hover:text-blue-500">
            Projects
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="hover:text-blue-500"
          >
            Résumé
          </Link>
        </div>
      </div>
    </div>
  );
}
