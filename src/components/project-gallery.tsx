"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const slider = scrollRef.current;

    if (!slider) {
      return;
    }

    let pressed = false;
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;

    const handleMouseDown = (event: MouseEvent) => {
      pressed = true;
      moved = false;
      setIsDragging(true);
      startX = event.pageX - slider.offsetLeft;
      startScrollLeft = slider.scrollLeft;
      slider.classList.add("drag-active");
    };

    const handleMouseLeave = () => {
      pressed = false;
      setIsDragging(false);
      slider.classList.remove("drag-active");
    };

    const handleMouseUp = () => {
      pressed = false;
      setIsDragging(false);
      slider.classList.remove("drag-active");

      window.setTimeout(() => {
        moved = false;
      }, 0);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!pressed) {
        return;
      }

      event.preventDefault();

      const x = event.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.25;

      if (Math.abs(walk) > 4) {
        moved = true;
      }

      slider.scrollLeft = startScrollLeft - walk;
    };

    const handleClickCapture = (event: MouseEvent) => {
      if (moved) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("click", handleClickCapture, true);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("click", handleClickCapture, true);
    };
  }, []);

  const handleWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
    if (!scrollRef.current) {
      return;
    }

    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      scrollRef.current.scrollBy({
        left: event.deltaY,
        behavior: "auto",
      });
    }
  };

  return (
    <section className="mt-10">
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <span className="eyebrow">Galerija projekta</span>
          <h2 className="display-font text-3xl font-semibold text-slate-950">
            Pregled svih slika za {title}
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Drzi lijevi klik i povuci lijevo ili desno preko reda slika.
            Ako samo kliknes bez povlacenja, slika ce se otvoriti.
          </p>
        </div>

        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
          {images.length} screens
        </p>
      </div>

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className={`gallery-scroll flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 py-8 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      >
        {images.map((image, index) => (
          <a
            key={image}
            href={image}
            target="_blank"
            rel="noreferrer"
            draggable={false}
            className="fan-card tech-panel section-glow group relative overflow-hidden rounded-[1.8rem] transition duration-300 hover:z-10 hover:rotate-0 hover:-translate-y-2"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-black/8 bg-white">
              <Image
                src={image}
                alt={`${title} pregled ${index + 1}`}
                fill
                draggable={false}
                className="pointer-events-none object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 320px, 72vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(17,24,39,0.28)] via-transparent to-transparent" />
              <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/55 bg-white/78 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur">
                Slika {index + 1}
              </div>
              <div className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/28 bg-slate-950/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-50">
                Klikni
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
