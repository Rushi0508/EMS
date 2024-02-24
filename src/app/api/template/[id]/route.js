import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  const id = Number(context.params.id || 0);

  const template = await prisma.template.findMany({
    where: {
      id: id,
    },
    cacheStrategy: { ttl: 60 },
  });

  return NextResponse.json({ template });
};
