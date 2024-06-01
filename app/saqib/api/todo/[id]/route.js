// .........BACKEND END POINTS for ID'S

const database = require("../../database");

// Delete task by ID
export async function DELETE(req, route) {
  const id = parseInt(route.params.id);

  await database.DeleteSingleTask(id);  
  return Response.json(await database.getAllTask());
}


// Mark completed / uncompleted
export async function PUT(req, route) {
  const id = parseInt(route.params.id);
  await database.MarkAsCompleted(id);
  return Response.json(await database.getAllTask());
}
