import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(req: NextRequest, res: NextResponse) {
  const bearerToken = req.headers.get("authorization") as string;

  if (!bearerToken) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request" }),
      { status: 401 }
    );
  }

  const token = bearerToken.split(" ")[1];
  if (!token) {
    return new NextResponse(
      JSON.stringify({ errorMessage: "Unauthorized request" }),
      { status: 401 }
    );
  }

  try {
    const jwtSecret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jose.jwtVerify(token, jwtSecret);
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ errorMessage: "Unauthorized" }), {
      status: 401,
    });
  }
}

export const config = {
  matcher: ["/api/auth/me"],
};
