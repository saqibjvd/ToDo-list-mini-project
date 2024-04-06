export async function GET() {
  return Response.json({ name: "Saliha" })
}
export async function POST(request) {
  const data = await request.json();
  return Response.json({ name: `Saliha ${data.middle_name} ${data.last_name}` })
}

