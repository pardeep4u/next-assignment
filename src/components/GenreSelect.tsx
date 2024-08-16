import Search from "./Search";
import { IGenreSelect } from "@/types";
import BadgeList from "./BadgeList";
import MultiSelect from "./MultiSelect";

export default function GenreSelect({
  genres,
  selected,
  setSelected,
  count,
  setMovieData,
  setNoMoreAvaliable,
}: IGenreSelect) {
  function removeItem(id: string) {
    count.current = 0;
    setMovieData([]);
    setNoMoreAvaliable(false);
    setSelected((movies) => {
      let newSelected = movies.filter((movie) => movie.name !== id);
      return newSelected;
    });
  }

  return (
    <div>
      {selected.length > 0 && (
        <BadgeList removeItem={removeItem} selected={selected} />
      )}
      <div className="flex gap-5 items-center justify-center">
        <Search />
        <MultiSelect
          genres={genres}
          selected={selected}
          setSelected={setSelected}
          count={count}
          setMovieData={setMovieData}
          setNoMoreAvaliable={setNoMoreAvaliable}
        />
      </div>
    </div>
  );
}
