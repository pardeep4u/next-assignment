import React, { Dispatch, SetStateAction } from "react";

function LoadMore({ setLoad }: { setLoad: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className="flex items-center justify-center mt-10">
      <button
        onClick={() => {
          setLoad((pre) => !pre);
        }}
        className="px-6 py-3 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 rounded-full font-semibold shadow-lg transform transition-transform duration-200 hover:scale-105 focus:outline-none"
      >
        Load More Movies
      </button>
    </div>
  );
}

export default LoadMore;
