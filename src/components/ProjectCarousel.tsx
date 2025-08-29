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
        className="aspect-[16/9]"
      >
        {images.map((img) => (
          <SwiperSlide key={img.src}>
            <div className="relative w-full h-full aspect-[16/9]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top"
                priority={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
