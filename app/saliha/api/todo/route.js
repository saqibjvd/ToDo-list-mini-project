let db = require("../database");

export async function GET() {
  console.log(await db.getTodos());
  return Response.json(await db.getTodos(), { status: 200 });
}

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);
    await db.AddTodo(data.task);
    return Response.json(await db.getTodos(), {
      status: 200,
      statusText: "New task added",
    });
  } catch (err) {
    return Response.json(err, {
      status: 500,
      statusText: "Error creating new task",
    });
  }
}

export async function DELETE(request) {
  const data = await request.json();
  await db.deleteCompletedTasks(data.completed);
  return Response.json(await db.getTodos());
}
