import { Movie } from "@prisma/client";
import { getCurrentUrl } from "@/constants";

function useGetSingleMovie() {
  const currentUrl = getCurrentUrl();
  let movieData: { data: Movie };
  let genMovies: {
    data: Movie[];
  };

  async function fetchData(params: { id: string }) {
    const response = await fetch(`${currentUrl}/api/get-by-id`, {
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
    const res = await fetch(`${currentUrl}/api/get-data?${queryString}`, {
      method: "POST",
      body: JSON.stringify({ skip: 0 }),
    });
    if (!res.ok) {
      throw new Error("Network res was not okay");
    }
    genMovies = await res.json();

    {
      /** movieData = single Movie Data , genMovies  = Movies related to that genre*/
    }

    return { movieData, genMovies };
  }

  return { fetchData };
}

export default useGetSingleMovie;
