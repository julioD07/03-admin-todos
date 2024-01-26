import prisma from "@/app/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  //? Extraemos los searchParams de la url
  const { searchParams } = new URL(request.url);
  //? Obtener los parametros de la url
  const limit = Number(searchParams.get("limit") || "10");
  const offset = Number(searchParams.get("offset") || "0");

  //? Validar que los parametros sean numeros
  if ( isNaN(limit) ) return NextResponse.json({ ok: false, message: 'Limit must be a number' }, { status: 400 });

  if ( isNaN(offset) ) return NextResponse.json({ ok: false, message: 'Offset must be a number' }, { status: 400 });

  //? Obtener los datos con prisma utilizando los parametros
  const todos = await prisma.todo.findMany({
    take: limit,
    skip: offset,
  });

  return NextResponse.json(todos);
}

export async function POST(req: Request) {
 const body = await req.json();

 const todo = await prisma.todo.create({ data: body });

 return NextResponse.json( todo, { status: 201 });
 }