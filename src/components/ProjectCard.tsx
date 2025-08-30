"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import type { CarouselImage } from "./ProjectCarousel";
const ProjectCarousel = dynamic(() => import("./ProjectCarousel"), {
  ssr: false,
});

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  liveLabel?: string;
  codeLabel?: string;
  highlights?: string[];
  challenges?: string[];
  image?: CarouselImage;
  images?: CarouselImage[];
  badge?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  liveUrl,
  codeUrl,
  liveLabel,
  codeLabel,
  highlights,
  challenges,
  image,
  images,
  badge,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6 md:p-7 rounded-2xl shadow-sm border border-zinc-200/70 dark:border-zinc-800 transition hover:-translate-y-2 hover:shadow-lg">
      {badge && (
        <span className="inline-block mb-3 text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
          {badge}
        </span>
      )}
      {Array.isArray(images) && images.length > 0 ? (
        <ProjectCarousel images={images} />
      ) : (
        image && (
          <div className="mb-4 relative w-full overflow-hidden rounded-xl aspect-[16/9] bg-gray-100 dark:bg-gray-800">
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
      <p className="mb-4 text-zinc-700 dark:text-zinc-300">{description}</p>
      {highlights && highlights.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-200 mb-2">
            Highlights
          </h4>
          <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-100">
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
          <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-100">
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
            className="text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700 px-3 py-1 rounded-full"
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
            {liveLabel ?? "Live"}
          </Link>
        )}
        {codeUrl && (
          <Link
            href={codeUrl}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            {codeLabel ?? "Code"}
          </Link>
        )}
      </div>
    </div>
  );
}
