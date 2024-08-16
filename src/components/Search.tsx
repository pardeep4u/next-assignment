"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import MyModal from "./MyModal";

function Search() {
  const [search, setSearch] = useState(false);

  return (
    <div className="hover:cursor-pointer mt-[2px]">
      <FiSearch
        className="w-6 h-6"
        onClick={() => {
          setSearch(true);
        }}
      />
      <MyModal isOpen={search} setIsOpen={setSearch} />
    </div>
  );
}

export default Search;
