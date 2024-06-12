let todoList = [
  {
    id: 1,
    text: "Complete project proposal",
    day: "Monday",
    reminder: true,
  },
  {
    id: 2,
    text: "Buy groceries",
    day: "Wednesday",
    reminder: false,
  },
  {
    id: 3,
    text: "Call mom",
    day: "Friday",
    reminder: true,
  },
];
export function GET() {
  return Response.json(todoList);
}
