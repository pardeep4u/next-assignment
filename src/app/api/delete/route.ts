import { NextRequest } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("id");

  if (query && query.length > 0) {
    await prisma.movie.delete({
      where: {
        id: query,
      },
    });

    return Response.json({ message: "Successfully deleted" });
  } else {
    return Response.json({ message: "Something went wrong" });
  }
}
