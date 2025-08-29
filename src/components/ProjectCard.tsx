"use client";
import Link from "next/link";
import Image from "next/image";
import ProjectCarousel, { CarouselImage } from "./ProjectCarousel";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  highlights?: string[];
  challenges?: string[];
  image?: CarouselImage;
  images?: CarouselImage[];
}

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  codeUrl,
  highlights,
  challenges,
  image,
  images,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-600 p-6 rounded-2xl shadow-lg ring-1 ring-gray-500 duration-150 hover:scale-102">
      {Array.isArray(images) && images.length > 0 ? (
        <ProjectCarousel images={images} />
      ) : (
        image && (
          <div className="mb-4 relative w-full overflow-hidden rounded-xl aspect-[16/9] bg-gray-100 dark:bg-gray-700">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        )
      )}
      <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
      {highlights && highlights.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200 mb-2">
            Highlights
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-100">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      )}
      {challenges && challenges.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200 mb-2">
            Challenges
          </h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-100">
            {challenges.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      )}
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
