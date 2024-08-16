import { useEffect, useRef, useState } from "react";
import { Movie } from "@prisma/client";
import { IGenre } from "@/types";

function useData() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<IGenre[]>([]);
  const [load, setLoad] = useState(false);
  const [noMoreAvaliable, setNoMoreAvaliable] = useState(false);
  const count = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const queryParam = selected.map((val) => val.name);
        const queryString = queryParam
          .map((param) => `genre=${encodeURIComponent(param)}`)
          .join("&");
        const response = await fetch(`/api/get-data?${queryString}`, {
          method: "POST",
          body: JSON.stringify({ skip: 8 * count.current }),
        });
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        const data: { data: Movie[]; genres: IGenre[] } = await response.json();

        if (data.data && data.data.length === 0) {
          setNoMoreAvaliable(true);
          return;
        } else {
          setMovieData((pre) => [...pre, ...data.data]);
          setGenres(data.genres);
          count.current++;
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selected, load]);

  return {
    count,
    loading,
    error,
    genres,
    selected,
    setSelected,
    movieData,
    setLoad,
    setMovieData,
    noMoreAvaliable,
    setNoMoreAvaliable,
  };
}

export default useData;
