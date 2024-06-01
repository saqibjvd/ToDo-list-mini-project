// "use client";
// import { NextResponse } from "next/server";

// const todoList = "https://jsonplaceholder.typicode.com/todos";

export async function GET() {
  return Response.json({ name: "Saqib" });
}

export async function POST(request) {
  const data = await request.json();
  return Response.json({
    name: `Saqib ${data.last_name}`,
  });
}

