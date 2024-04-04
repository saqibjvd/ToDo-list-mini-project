const todoData = require("../database");

export async function GET() {
  return Response.json(todoData.todos);
}

export async function POST(req, res) {
  const data = await req.json();
  const newTodo = {
    id: todoData.todos[todoData.todos.length - 1].id + 1,
    task: data.newTask,
    completed: false,
  };
  todoData.todos.push(newTodo);
  return Response.json(todoData.todos);
}

export async function DELETE(req) {
  const data = await req.json();
  if (data.completed) {
    DeleteCompletedTask();
  } else {
    DeleteAllTask();
  }
  return Response.json(todoData.todos);
}
