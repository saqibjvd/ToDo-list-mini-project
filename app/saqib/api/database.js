export let todos = [
  { id: 1, task: "Practice more js", completed: false },
  { id: 2, task: "Learn React", completed: false },
  { id: 3, task: "Complete Todo list project", completed: false },
  { id: 4, task: "Learn tailwind", completed: true },
];

export function DeleteSingleTask(id) {
  todos = todos.filter((todo) => todo.id !== id);
}

export function DeleteCompletedTask() {
  todos = todos.filter((todo) => !todo.completed);
}

export function DeleteAllTask() {
  todos = [];
}
