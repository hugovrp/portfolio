"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CarouselProps {
  images: string[];
  name: string;
}

export default function Carousel({ images, name }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrent((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  if (!images.length) return null;

  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={images[current]}
        alt={`${name} - imagem ${current + 1}`}
        width={1200}
        height={600}
        loading="eager"
        className="w-full aspect-video object-fill"
      />

      {images.length > 1 && (
        <div>
          <button
            onClick={prevSlide}
            aria-label="Imagem anterior"
            className="
              absolute left-3 top-1/2 -translate-y-1/2
              flex items-center justify-center
              w-9 h-9 rounded-full
              bg-dark-background/70 text-white-font
              hover:bg-dark-background/90
              transition-all cursor-pointer
            "
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próxima imagem"
            className="
              absolute right-3 top-1/2 -translate-y-1/2
              flex items-center justify-center
              w-9 h-9 rounded-full
              bg-dark-background/70 text-white-font
              hover:bg-dark-background/90
              transition-all cursor-pointer
            "
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Ir para imagem ${index + 1}`}
                className={`
                  h-2 rounded-full transition-all cursor-pointer
                  ${
                    current === index
                      ? "w-5 bg-white"
                      : "w-2 bg-white/50"
                  }
                `}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}