import prisma from "../../../../prisma/client";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const movie = await prisma.movie.findFirst({
    where: {
      imdbid: body.imdbid,
    },
  });

  return Response.json({ data: movie });
}
