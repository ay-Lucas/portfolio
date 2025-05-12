import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-600 p-6 rounded-2xl shadow-lg ring-1 ring-gray-500 duration-150 hover:scale-102">
      <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Live
          </Link>
        )}
        {codeUrl && (
          <Link
            href={codeUrl}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Code
          </Link>
        )}
      </div>
    </div>
  );
}
