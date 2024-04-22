const todoData = require("../database");

export async function GET() {
  return Response.json(await todoData.getAllTask());
}

export async function POST(req, res) {
  const data = await req.json();
  const id = todoData.todos.length
    ? todoData.todos[todoData.todos.length - 1].id + 1
    : 1;
  const newTodo = {
    id: id,
    task: data.newTask,
    completed: false,
  };
  todoData.todos.push(newTodo);
  return Response.json(todoData.todos);
}

export async function DELETE(req) {
  const data = await req.json();
  if (data.completed) {
    todoData.DeleteCompletedTask();
  } else {
    todoData.DeleteAllTask();
  }
  return Response.json(todoData.todos);
}
