let todos = [
  { id: 1, task: "Practice more js", completed: false },
  { id: 2, task: "Learn React", completed: false },
  { id: 3, task: "Complete Todo list project", completed: false },
  { id: 4, task: "Learn tailwind", completed: true },
];

export async function GET() {
  return Response.json(todos);
}

export async function POST(req, res) {
  const data = await req.json();
  const newTodo = {
    id: todos.length + 1,
    task: data.newTask,
    completed: false,
  };
  todos.push(newTodo);
  return Response.json(todos);
}

export async function DELETE(req, res) {
  
}
