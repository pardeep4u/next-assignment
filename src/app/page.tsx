"use client";

import GenreSelect from "@/components/GenreSelect";
import LoadingSpinner from "@/components/LoadingSpinner";
import LoadMore from "@/components/LoadMore";
import MovieCard from "@/components/MovieCard";
import useData from "@/hooks/useData";

export default function Home() {
  const {
    loading,
    error,
    genres,
    selected,
    setSelected,
    movieData,
    count,
    setLoad,
    setMovieData,
    noMoreAvaliable,
    setNoMoreAvaliable,
  } = useData();

  return (
    <main>
      <section className="container mx-auto">
        {loading && <LoadingSpinner />}
        <>
          {error ? (
            <p>Error loading data: {error}</p>
          ) : (
            <>
              <div className="text-center py-10 flex justify-center items-center">
                <GenreSelect
                  genres={genres}
                  selected={selected}
                  setSelected={setSelected}
                  count={count}
                  setMovieData={setMovieData}
                  setNoMoreAvaliable={setNoMoreAvaliable}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-10 md:px-16 lg:px-20">
                {movieData.map((movie) => (
                  <MovieCard movie={movie} key={movie.title} />
                ))}
              </div>
              {noMoreAvaliable ? (
                <div className="text-center font-bold text-red-500 mt-4 py-3 px-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-lg shadow-lg">
                  No More Movies Available
                </div>
              ) : (
                <LoadMore setLoad={setLoad} />
              )}
            </>
          )}
        </>
      </section>
    </main>
  );
}
