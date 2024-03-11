let todos = [
  { id: 1, task: "learn React", completed: false },
  { id: 2, task: "learn Next.js", completed: true },
]

export function GET() {
  return Response.json(todos);
}