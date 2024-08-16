"use client";

import useSingleMovie from "@/hooks/useSingleMovie";
import { Movie } from "@prisma/client";
import React from "react";

function DeleteButton({ movie }: { movie: Movie }) {
  const { handleDelete, isDeleting } = useSingleMovie();

  return (
    <button
      onClick={() => {
        handleDelete(movie.id);
      }}
      disabled={isDeleting}
      className={`ml-4 px-3 py-1 rounded text-white ${
        isDeleting
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-red-500 hover:bg-red-600"
      }`}
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}

export default DeleteButton;
