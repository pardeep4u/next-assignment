"use client";

import useSingleMovie from "@/hooks/useSingleMovie";
import MoreMovies from "./MoreMovies";

const MovieDetails = ({ movie, genMovies }: { movie: any; genMovies: any }) => {
  const { handleDelete, isDeleting } = useSingleMovie();

  return (
    <div>
      <div className="mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-6 my-8">
        <div className="flex flex-col md:flex-row">
          <img
            src={movie.bigImage}
            alt={movie.title}
            className="w-full md:w-1/3 rounded-lg object-cover"
          />
          <div className="mt-4 md:mt-0 md:ml-6 relative">
            <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-400 mb-4">{movie.year}</p>
            <p className="text-lg mb-4">{movie.description}</p>
            <div className="mb-4">
              <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                Rating: {movie.rating}
              </span>
            </div>
            <div className="flex items-center w-full justify-between absolute bottom-0">
              <div className="flex flex-wrap">
                {movie.genre.map((genre: any, index: any) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={movie.imdbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on IMDb
                </a>
                <button
                  onClick={() => {
                    handleDelete(movie.id);
                  }}
                  disabled={isDeleting}
                  className={`ml-4 px-3 py-1 rounded text-white ${
                    isDeleting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center my-8">
        <h3 className="text-2xl font-semibold text-gray-800">
          Movies You Also Like
        </h3>
        <p className="text-gray-600 mt-2">
          Here are some other movies that you might enjoy:
        </p>
      </div>

      <div>
        <MoreMovies genMovies={genMovies} />
      </div>
    </div>
  );
};

export default MovieDetails;
