"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  Mousewheel,
} from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!images?.length) return null;
  return (
    <div className="mb-4 relative w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
        navigation
        mousewheel
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        spaceBetween={8}
        slidesPerView={1}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        className="h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px]"
      >
        {images.map((img, i) => (
          <SwiperSlide key={img.src}>
            <button
              type="button"
              onClick={() => {
                setActiveIndex(i);
                setOpen(true);
              }}
              className="relative w-full h-full cursor-zoom-in"
              aria-label="View screenshot full screen"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={100}
                sizes="(min-width: 1024px) 600px, (min-width: 768px) 70vw, 100vw"
                className={
                  img.fit === "cover"
                    ? "object-cover object-top"
                    : "object-contain"
                }
                priority={false}
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-gray-950/90 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen screenshots"
            onClick={() => setOpen(false)}
          >
            <div className="absolute top-1 right-1 z-10">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="hover:text-gray-300 transition-colors text-white"
                aria-label="Close full screen"
              >
                <X size={40} />
              </button>
            </div>
            <div
              className="w-screen h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
                navigation
                mousewheel
                pagination={{ clickable: true }}
                keyboard={{ enabled: true }}
                spaceBetween={16}
                slidesPerView={1}
                initialSlide={activeIndex}
                className="w-full h-full"
              >
                {images.map((img) => (
                  <SwiperSlide key={`full-${img.src}`}>
                    <div className="relative w-full h-full flex">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="100vw"
                        className={
                          img.fit === "cover"
                            ? "object-contain md:object-cover"
                            : "object-contain"
                        }
                        priority={false}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
