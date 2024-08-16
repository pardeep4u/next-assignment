import { IGenre } from "@/types";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function BadgeList({
  removeItem,
  selected,
}: {
  removeItem: (id: string) => void;
  selected: IGenre[];
}) {
  return (
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
  );
}

export default BadgeList;
