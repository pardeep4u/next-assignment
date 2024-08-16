import { Movie } from "@prisma/client";
import MovieCard from "./MovieCard";

function MoreMovies({ genMovies }: { genMovies: { data: Movie[] } }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-10 md:px-16 lg:px-20">
        {genMovies.data.slice(0, 8).map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    </div>
  );
}

export default MoreMovies;
