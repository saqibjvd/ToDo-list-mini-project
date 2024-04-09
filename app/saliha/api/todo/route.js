let db = require('../database');

export async function GET() {
  return Response.json(db.getTodos(), { status: 200 });
}

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data)
    db.AddTodo(data.task)
    return Response.json(db.getTodos(), { status: 200, statusText: "New task added" });
  } catch (err) {
    return Response.json(err, {
      status: 500,
      statusText: "Error creating new task",
    });
  }
}

export async function DELETE(request, route) {
  const data = await request.json();
  db.deleteCompletedTasks(data.completed);
  return Response.json(db.getTodos());
}


