"use client";

import { MovieCard } from "@/app/components/MovieCard";
import { Movie } from "@/app/shared/types";

interface MovieCarouselProps {
  movies: Movie[];
  title?: string;
  className?: string;
}

export const MovieCarousel = ({
  movies,
  title = "Сейчас смотрят чаще",
  className = "",
}: MovieCarouselProps) => {
  return (
    <section className={`w-full ${className}`}>
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
        {title}
      </h2>
      <div className="flex gap-x-[50px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pb-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
};
