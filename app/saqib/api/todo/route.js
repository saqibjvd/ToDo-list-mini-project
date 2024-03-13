const todos = [
    { id: 1, task: "Practice more js", completed: false },
    { id: 2, task: "Learn React", completed: false },
    { id: 3, task: "Complete Todo list project", completed: false },
    { id: 4, task: "Learn tailwind", completed: true },
  ]

export async function GET() {
  return Response.json( todos );
}

export async function POST(request) {
  const data = await request.json();
  return Response.json({
    name: `Saqib ${data.last_name}`,
  });
}
