const todoData = require("../../database");

export async function DELETE(req, route) {
  console.log("hello there");
  const id = parseInt(route.params.id);
  console.log("this is id", id)
  todoData.DeleteSingleTask(id);
  return Response.json(await todoData.getAllTask());
}

// PUT request here for mark as completed.
export async function PUT(req, route){
    const id = parseInt(route.params.id)
    todoData.MarkAsCompleted(id)
    return Response.json(todoData.todos)
}