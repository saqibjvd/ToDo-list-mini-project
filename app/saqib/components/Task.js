//"use client";
// import Todos from "../components/Todos";
// import React, { useState } from "react";

// export default function Task() {
//   const [newTask, setNewTask] = useState(" ");

//   const [todos, setTodos] = useState([
//     { id: 1, task: "Practice more js", completed: false },
//     { id: 2, task: "Learn React", completed: false },
//     { id: 3, task: "Complete Todo list project", completed: false },
//     { id: 4, task: "Learn tailwind", completed: true },
//   ]);

//   // this will add new task to the list
//   function addTask(e) {
//     e.preventDefault();
//     if (newTask.trim() !== "") {
//       const newTodo = {
//         id: todos.length + 1,
//         task: newTask,
//         completed: false,
//       };
//       setTodos([...todos, newTodo]);
//       setNewTask(" ");
//     }
//   }

//   // to delete single todo task
//   const deleteItem = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   // delete completed task from list
//   const deleteCompletedTask = (todo) => {
//     const CompletedTodos = todos.filter((todo) => !todo.completed);
//     setTodos(CompletedTodos);
//   };

//   // Delete all task
//   const DeleteAllTask = (todos) => {
//     setTodos([]);
//   };

//   // mark task as completed /uncompleted
//   const clickHandler = (todo) => {
//     todo.completed = !todo.completed;
//     setTodos([...todos]);
//   };

//   return (
//     <div className="flex justify-center pt-40 text-center sm:text-left">
//       <div>
//         <div>
//           <h1>To-do List ✏️</h1>
//         </div>

//         {/* form */}
//         <div>
//           <form onSubmit={addTask}>
//             <input
//               type="text"
//               value={newTask}
//               onChange={(e) => setNewTask(e.target.value)}
//               placeholder="Add task"
//             />
//             <button className="bg-sky-500/100 hover:bg-sky-600" type="submit">
//               +
//             </button>
//           </form>
//         </div>

//         {/* Delete completed task */}
//         <div>
//           <button onClick={() => deleteCompletedTask(todos)}>
//             Delete Completed
//           </button>
//           <button onClick={() => DeleteAllTask(todos)}>Delete All</button>
//         </div>

//         {/* display todo list */}
//         <div>
//           {todos.map((todo) => {
//             return (
//               <li
//                 className={todo.completed ? "line-through" : ""}
//                 key={todo.id}
//               >
//                 <span onClick={() => clickHandler(todo)}>{todo.task}</span>
//                 Delete single task
//                 <button onClick={() => deleteItem(todo.id)}>Delete</button>
//               </li>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
