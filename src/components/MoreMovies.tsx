"use client";

import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function MoreMovies({ genMovies }: { genMovies: any }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 px-20">
        {genMovies.data.slice(0, 8).map((movie: any) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default MoreMovies;
