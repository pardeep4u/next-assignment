import { Movie } from "@prisma/client";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface IGenre {
  id: number;
  name: string;
}

export interface IGenreSelect {
  genres: IGenre[];
  selected: IGenre[];
  setSelected: Dispatch<SetStateAction<IGenre[]>>;
  count: MutableRefObject<number>;
  setMovieData: Dispatch<SetStateAction<Movie[]>>;
  setNoMoreAvaliable: Dispatch<SetStateAction<boolean>>;
}
