"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard } from "swiper/modules";
import Image from "next/image";

// Swiper styles (tree-shaken by Next when unused)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface CarouselImage {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}

export default function ProjectCarousel({
  images,
}: {
  images: CarouselImage[];
}) {
  if (!images?.length) return null;
  return (
    <div className="mb-4 relative w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        spaceBetween={8}
        slidesPerView={1}
        className="h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px]"
      >
        {images.map((img) => (
          <SwiperSlide key={img.src}>
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 600px, (min-width: 768px) 70vw, 100vw"
                className={img.fit === "cover" ? "object-cover object-top" : "object-contain"}
                priority={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
