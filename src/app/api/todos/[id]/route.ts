import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

interface Segments {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: Segments) {
    console.log(params)
  const todo = await prisma.todo.findUnique({
    where: {
      id: (params.id),
    },
  });

  if (!todo) {
    return NextResponse.json({ ok: false, message: "Todo not found" }, { status: 404 });
  }

  console.log(todo)

  return NextResponse.json(todo);
}
