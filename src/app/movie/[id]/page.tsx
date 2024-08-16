import MovieDetails from "@/components/MovieDetails";
export default async function Home({ params }: { params: { id: string } }) {
  let response;
  let movieData;
  let genMovies;

  console.log(process.env.NEXT_AUTH_URL);

  try {
    response = await fetch(`http://localhost:3000/api/get-by-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imdbid: params.id }),
    });
    if (!response.ok) {
      throw new Error("Network response was not okay");
    }
    movieData = await response.json();

    const queryString = movieData.data.genre
      .map((param: string) => `genre=${encodeURIComponent(param)}`)
      .join("&");
    const res = await fetch(
      `http://localhost:3000/api/get-data?${queryString}`
    );
    if (!res.ok) {
      throw new Error("Network res was not okay");
    }
    genMovies = await res.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }

  return (
    <main>
      <section className="container mx-auto">
        <MovieDetails movie={movieData.data} genMovies={genMovies} />
      </section>
    </main>
  );
}
