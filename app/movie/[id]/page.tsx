"use client";
import Image from "next/image";
import { instance } from "@/app/shared/instance";
import { Movie } from "@/app/shared/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const FullMovie = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const id = useParams().id;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await instance.get(`/movie/${id}`);
        setMovie(data);
      } catch (err) {
        console.error("Ошибка при загрузке фильма:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (isLoading) {
    return (
      <div className="w-full max-w-[1000px] text-white text-center py-10">
        Загрузка...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="w-full max-w-[1000px] text-white text-center py-10">
        Фильм не найден
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 40%, transparent 100%), url(${movie.backdrop.url})`,
      }}
      className="relative w-full flex flex-row items-center justify-center content-center bg-no-repeat bg-cover bg-center h-[660px]"
    >
      <div className="relative w-full flex flex-row items-center">
        <Image
          src={movie.logo.url}
          width={300}
          height={200}
          alt="Poster"
        />
      </div>
    </div>
  );
};

export default FullMovie;
