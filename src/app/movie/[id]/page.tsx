import MovieDetails from "@/components/MovieDetails";
import useGetSingleMovie from "@/hooks/useGetSingleMovie";

export default async function Home({ params }: { params: { id: string } }) {
  const { fetchData } = useGetSingleMovie();
  const { genMovies, movieData } = await fetchData(params);

  return (
    <main>
      <section className="container mx-auto">
        <MovieDetails movie={movieData.data} genMovies={genMovies} />
      </section>
    </main>
  );
}
