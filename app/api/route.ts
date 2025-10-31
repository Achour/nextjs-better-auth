import { NextResponse } from "next/server";
import prisma from "@src/generated/prisma/client";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json("ok");
}
