let todos = [
  { id: 1, task: "Practice more js", completed: false },
  { id: 2, task: "Learn React", completed: false },
  { id: 3, task: "Complete Todo list project", completed: false },
  { id: 4, task: "Learn tailwind", completed: true },
];

export async function GET() {
  return Response.json(todos);
}

// export async function GET(request, content) {
//   const data = todos;
//   console.log("this data from api" , data, content.params.id)
//   const todoData = todos.find((todo) => todo.id === content.params.id);
//   return Response.json(todoData);
// }

export async function POST(req, res) {
  const data = await req.json();
  const newTodo = {
    id: todos.length + 1,
    task: data.newTask,
    completed: false,
  };
  todos.push(newTodo);
  return Response.json(todos);
}

export async function DELETE(req, content) {
   let id = content.params.id;
  // let id = req.body.id;
  let indexToDelete = todos.findIndex((todo) => todo.id === id);
  todos.splice(indexToDelete, 1);
  let todoToDelete = todos.find((todo) => todo.id === id);
  res.status(200).json(todoToDelete);

  // if (id) {
  //   return response.json(
  //     { result: "task deleted", success: true },
  //     { status: 200 }
  //   );
  // } else {
  //   return response.json(
  //     { result: "task not deleted", success: false },
  //     { status: 400 }
  //   );
  // }
}
