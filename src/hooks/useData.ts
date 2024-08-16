import { useEffect, useState } from "react";

function useData() {
  const [movieData, setMovieData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const queryParam = selected.map((val) => val.name);
        const queryString = queryParam
          .map((param) => `genre=${encodeURIComponent(param)}`)
          .join("&");
        const response = await fetch(`/api/get-data?${queryString}`);
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }

        const data = await response.json();

        setMovieData(data.data);
        setGenres(data.genres);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selected]);

  return {
    loading,
    error,
    genres,
    selected,
    setSelected,
    movieData,
  };
}

export default useData;
