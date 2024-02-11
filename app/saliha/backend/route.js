export async function GET() {
  return Response.json({ name: "Saliha Popal" })
}
export async function POST(request) {
  const data = await request.json();
  return Response.json({ name: `${data.first_name} ${data.last_name}` })
}