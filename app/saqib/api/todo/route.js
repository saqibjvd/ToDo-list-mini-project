//..........BACKEND............

const database = require("../database");

// Display all todo  list on page
export async function GET() {
  return Response.json(await database.getAllTask());
}

// Create new todotask
export async function POST(req, res) {
  const data = await req.json();

  await database.addNewTask(data.newTask);
  return Response.json(await database.getAllTask());
}

// Delete tasks
export async function DELETE(req) {
  const data = await req.json();
  if (data.completed) {
   await database.DeleteCompletedTask();
  } else {
   await database.DeleteAllTask();
  }
  return Response.json(await database.getAllTask());
}
