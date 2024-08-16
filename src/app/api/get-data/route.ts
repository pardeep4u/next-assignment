import { NextRequest } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.getAll("genre");

  let movies;
  let gen;

  if (query && query.length > 0) {
    movies = await prisma.movie.findMany({
      where: {
        genre: {
          hasSome: query,
        },
      },
    });
  } else {
    movies = await prisma.movie.findMany();
  }
  const genData = await prisma.movie.findMany();

  gen = genData.reduce((acc: string[], movie) => {
    movie.genre.forEach((g: any) => {
      if (!acc.includes(g)) {
        acc.push(g);
      }
    });
    return acc;
  }, []);

  const genres = gen.map((val, idx) => {
    return { id: idx + 1, name: val };
  });

  return Response.json({ data: movies, genres: genres });
}
