import { NextRequest } from "next/server";

import prisma from "../../../../prisma/client";

export async function POST(req: NextRequest) {
  try {
    const value = await req.json();

    const data = await prisma.movie.findMany({
      where: {
        title: {
          contains: value.value,
          mode: "insensitive",
        },
      },
      take: 5,
    });

    return Response.json({ data: data });
  } catch (err) {
    console.error(err);
    return Response.json({
      ok: false,
      data: [],
      message: "Something went wrong",
    });
  }
}
