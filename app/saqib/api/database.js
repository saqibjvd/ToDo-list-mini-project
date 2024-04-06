export let todos = [
  { id: 1, task: "Learn javaScript", completed: false },
  { id: 2, task: "Learn React", completed: false },
  { id: 3, task: "Learn Node", completed: true },
  { id: 4, task: "Complete Todo list project", completed: false },
  { id: 5, task: "Learn Next.js", completed: false },
  { id: 6, task: "Complete Task 1", completed: true },
  { id: 7, task: "Complete task 2", completed: true },
  { id: 8, task: "Complete Task 3", completed: false },
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

export function MarkAsCompleted(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
}
