const database = require("../database");

export async function GET() {
  return Response.json(await database.getAllTask());
}

export async function POST(req, res) {
  const data = await req.json();
  console.log("i am data", data);
  database.addNewTask(data.newTask);
  return Response.json(await database.getAllTask());
}

export async function DELETE(req) {
  const data = await req.json();
  if (data.completed) {
    database.DeleteCompletedTask();
  } else {
    database.DeleteAllTask();
  }
  return Response.json(todoData.todos);
}
