// export let todos = [
//   { id: 1, task: "Learn javaScript", completed: false },
//   { id: 2, task: "Learn React", completed: false },
//   { id: 3, task: "Learn Node", completed: false },
//   { id: 4, task: "Complete Todo list project", completed: false },
//   { id: 5, task: "Learn Next.js", completed: false },
//   { id: 6, task: "Complete Task 1", completed: false },
//   { id: 7, task: "Complete task 2", completed: false },
//   { id: 8, task: "Complete Task 3", completed: false },
// ];


import pg from "pg"; // require for postgress

const { Pool } = pg; // conect to db

const pool_options = {
  connectionString: "postgresql://saqibjaved@localhost:5432/todos",
};

const pool = new Pool(pool_options);

export async function getAllTask() {
  // display all todos from databse
  const client = await pool.connect();
  const result = await client.query("Select * FROM todos");
  return result.rows;
}

export async function addNewTask(newTask) {
  const client = await pool.connect();
  const result = await client.query(
    "INSERT INTO todos (task, completed) VALUES ($1, false )",
    [newTask]
  );
}

export async function DeleteSingleTask(id) {
  console.log("this is id 2", id);
  const client = await pool.connect();
  const result = await client.query(`DELETE FROM todos WHERE id = ${id}`);
  console.log("this is my result", result);
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
