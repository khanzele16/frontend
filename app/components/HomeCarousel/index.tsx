"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { instance } from "@/app/shared/instance";
import { Movie } from "@/app/shared/types";
import { getMovieRating } from "@/app/shared/lib/getMovieRating";
import Link from "next/link";

export const HomeCarousel = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMoviesCarousel = async () => {
      try {
        const { data } = await instance.get("/movie/carousel");
        setMovies(data);
      } catch (err) {
        console.error("Ошибка при загрузке карусели:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesCarousel();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full max-w-[1000px] text-white text-center py-10">
        Загрузка...
      </div>
    );
  }
  return (
    <Carousel
      className="w-full max-w-[1000px]"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {movies.map((movie, index) => (
          <CarouselItem key={index}>
            <Link className='cursor-pointer' href={`/movie/${movie.id}`}>
              <div className="relative w-full max-h-[500px]">
                <Image
                  width={1000}
                  height={400}
                  className="object-cover"
                  src={movie.backdrop.url}
                  alt="Movie background"
                />
                <div className="absolute top-0 w-[1000px] h-[562.5px] bg-[rgba(0,0,0,0.75)]"></div>
                <p className="absolute top-[25px] right-[30px] text-white text-3xl font-bold opacity-50 font-[family-name:var(--font-montserrat)]">
                  {movie.ageRating}+
                </p>
                <div className="flex flex-col gap-y-[10px] absolute bottom-[25px] left-[30px] right-[30px]">
                  <div className="flex flex-row justify-between items-end content-end gap-x-[15px]">
                    <Image
                      src={movie.logo.url}
                      width={200}
                      height={50}
                      alt="Movie logo"
                    />
                    <div className="flex flex-row gap-x-[6px] font-bold">
                      <p
                        style={{ color: `${getMovieRating(movie.rating.kp)}` }}
                        className="text-xl font-bold"
                      >
                        {movie.rating.kp.toString().slice(0, 3)}
                      </p>
                      <p className="text-white text-xl">({movie.year} г.)</p>
                    </div>
                  </div>
                  <p className="text-white text-base">{movie.description}</p>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="cursor-pointer" />
      <CarouselNext className="cursor-pointer" />
    </Carousel>
  );
};

export default HomeCarousel;
