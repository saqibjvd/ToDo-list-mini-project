const todoData = require("../../database");

export async function DELETE(req, route) {
  const id = parseInt(route.params.id);
  todoData.DeleteSingleTask(id);
  return Response.json(todoData.todos);
}

// PUT request here for mark as completed.
export async function PUT(req, route){
    const id = parseInt(route.params.id)
    todoData.MarkAsCompleted(id)
    return Response.json(todoData.todos)
}