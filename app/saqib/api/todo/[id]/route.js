// import { todos } from "../../../api/todo/route";

// let todos = [
//   { id: 1, task: "Practice more js", completed: false },
//   { id: 2, task: "Learn React", completed: false },
//   { id: 3, task: "Complete Todo list project", completed: false },
//   { id: 4, task: "Learn tailwind", completed: true },
// ];

// export async function GET(request, content) {
//   const data = todos;
//   console.log("this data from api" , data, content.params.id)

//   const todoData = todos.find((todo) => todo.id === content.params.id);

//   return Response.json(todoData);
// }

// export async function GET(request, params) {
//   const todoById = todos.find((todo) => todo.id === parseInt(params.id));
//   return Response.json(todoById)
// };
