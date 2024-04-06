let todos = [
  { id: 1, task: "learn React", completed: false },
  { id: 2, task: "learn Next.js", completed: true },
];

export function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id );
}
export function getTodos() {
  return todos;
}
