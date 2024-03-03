// "use client";

// this will add new task to the list
// function addTask(e) {
//   e.preventDefault();
//   if (newTask.trim() !== "") {
//     const newTodo = {
//       id: todos.length + 1,
//       task: newTask,
//       completed: false,
//     };
//     setTodos([...todos, newTodo]);
//     setNewTask(" ");
//   }
// }

// to delete single todo task
// const deleteItem = (id) => {
//   setTodos(todos.filter((todo) => todo.id !== id));
// };

// delete completed task from list
// const deleteCompletedTask = (todo) => {
//   const CompletedTodos = todos.filter((todo) => !todo.completed);
//   setTodos(CompletedTodos);
// };

// Delete all task
// const DeleteAllTask = (todos) => {
//   console.log("im clicked");
//   setTodos([]);
// };

// // mark task as completed /uncompleted

// const clickHandler = (todo) => {
//   todo.completed = !todo.completed;
//   setTodos([...todos]);
// };
