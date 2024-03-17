var db = require('../../database');

export function DELETE(req, route) {
  const id = parseInt(route.params.id);
  db.deleteTodo(id);
  return Response.json(db.getTodos());
}