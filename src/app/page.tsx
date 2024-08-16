"use client";

import GenreSelect from "@/components/GenreSelect";
import LoadingSpinner from "@/components/LoadingSpinner";
import MovieCard from "@/components/MovieCard";
import useData from "@/hooks/useData";

export default function Home() {
  const { loading, error, genres, selected, setSelected, movieData } =
    useData();

  return (
    <main>
      <section className="container mx-auto">
        {loading ? (
          <LoadingSpinner />
        ) : (
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
                  />
                </div>
                <div className="grid grid-cols-4 gap-4 px-20">
                  {movieData.map((movie: any) => (
                    <MovieCard movie={movie} key={movie.title} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
}
