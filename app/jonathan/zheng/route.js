export async function GET() {
  return Response.json({ name: "Jonathan" })
}
export async function POST(request) {
  const data = await request.json();
  return Response.json({ name: `Jonathan ${data.middle_name} ${data.last_name}` })
}