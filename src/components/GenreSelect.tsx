"use client";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Search from "./Search";
import { AiOutlineClose } from "react-icons/ai";
import LoadingSpinner from "./LoadingSpinner";

export default function GenreSelect({
  genres,
  selected,
  setSelected,
}: {
  genres: { id: number; name: string }[];

  selected: {
    id: number;
    name: string;
  }[];
  setSelected: Dispatch<
    SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;

  // setLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const [query, setQuery] = useState("");
  // const [selected, setSelected] = useState<{ id: number; name: string }[]>([]);
  // const [loading, setLoading] = useState(false);

  const filteredGenres =
    query === ""
      ? genres
      : genres.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  function removeItem(id: string) {
    setSelected((movies) => {
      let newSelected = movies.filter((movie) => movie.name !== id);
      return newSelected;
    });
  }

  return (
    <div className="">
      {selected.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-5 w-full">
          {selected.map((gen) => (
            <li
              key={gen.id}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full flex items-center space-x-2"
            >
              <span>{gen.name}</span>
              <AiOutlineClose
                onClick={() => {
                  removeItem(gen.name);
                }}
                className="cursor-pointer text-gray-500 hover:text-gray-800"
              />
            </li>
          ))}
        </ul>
      )}
      <div className="flex gap-5 items-center justify-center">
        <Search />

        <Combobox
          value={selected}
          onChange={(value) => setSelected(value)}
          onClose={() => setQuery("")}
          multiple={true}
        >
          <div className="relative">
            <ComboboxInput
              className={clsx(
                "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              displayValue={() => "Select Genre Options"}
              disabled={true}
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
              <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
            </ComboboxButton>
          </div>

          <ComboboxOptions
            anchor="bottom"
            transition
            className={clsx(
              "w-[var(--input-width)] rounded-xl border border-white/5  p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
              "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 bg-black h-64"
            )}
          >
            {filteredGenres.map((person) => (
              <ComboboxOption
                key={person.id}
                value={person}
                className="group flex bg-black cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-800"
              >
                <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                <div className="text-sm/6 text-white">{person.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>
    </div>
  );
}
