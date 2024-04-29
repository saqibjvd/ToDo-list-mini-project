let db = require("../../database");

export async function DELETE(request, route) {
  const id = parseInt(route.params.id);
  await db.deleteTodo(id);
  return Response.json(await db.getTodos());
}

export async function PUT(request, route) {
  console.log(await db.getTodos());
  try {
    const id = parseInt(route.params.id);
    const { task, completed } = await request.json();

    await db.updateTodo(id, task, completed);
    return Response.json(await db.getTodos());
  } catch (err) {
    return Response.json(
      {
        error: "Error updating todo item"
      },
      { status: 500 }
    );
  }
}
