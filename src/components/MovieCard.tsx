/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@prisma/client";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link
      href={"/movie/" + movie.imdbid}
      className="max-sm:flex items-center justify-center"
    >
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:cursor-pointer hover:-translate-y-1 transition-all">
        <img className="w-full" src={movie.image} alt={movie.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-black text-xl mb-2">{movie.title}</div>
          <p className="text-gray-700 text-base mb-4">
            {movie.description.slice(0, 100)}...
          </p>
          <div className="flex items-center justify-between">
            <div className="text-gray-700 text-sm">
              <span className="font-semibold">Genre: </span>
              {movie.genre.join(", ")}
            </div>
            <div className="text-gray-700 text-sm">
              <span className="font-semibold">Year: </span>
              {movie.year}
            </div>
          </div>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image
              className="w-6 h-6 rounded-full"
              src={movie.thumbnail}
              alt={`${movie.title} thumbnail`}
              width={100}
              height={100}
            />
            <span className="text-gray-700 font-semibold">
              Rating: {movie.rating}
            </span>
          </div>
          <a
            href={movie.imdbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 font-bold text-sm"
          >
            View on IMDb
          </a>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
