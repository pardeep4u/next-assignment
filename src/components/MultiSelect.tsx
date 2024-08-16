import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { IGenreSelect } from "@/types";
import { useState } from "react";

function MultiSelect({
  genres,
  selected,
  setSelected,
  count,
  setMovieData,
  setNoMoreAvaliable,
}: IGenreSelect) {
  const [query, setQuery] = useState("");

  const filteredGenres =
    query === ""
      ? genres
      : genres.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Combobox
      value={selected}
      onChange={(value) => {
        setNoMoreAvaliable(false);
        count.current = 0;
        setMovieData([]);
        setSelected(value);
      }}
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
  );
}

export default MultiSelect;
