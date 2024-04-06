let db = require("../../database");

export function DELETE(request, route) {
  const id = parseInt(route.params.id);
  db.deleteTodo(id);
  return Response.json(db.getTodos());
}

export async function PUT(request, route) {
  try {
    const id = parseInt(route.params.id);
    const { task, completed } = await request.json();
    db.updateTodo(id, task, completed);
    return Response.json(db.getTodos(), {
      status: 200,
      statusText: "Todo item updated",
    });
  } catch (err) {
    return Response.json(
      {
        error: "Error updating todo item",
        message: err.message,
      },
      { status: 500 }
    );
  }
}


