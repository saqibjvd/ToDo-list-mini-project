var db = require('../database');

export function GET() {
  return Response.json(db.getTodos());
}
