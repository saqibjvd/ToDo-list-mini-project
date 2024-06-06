// ...........this is BACKEND where database is connected.........

import pg from "pg"; // require for postgress

const { Pool } = pg; // conect to db

const pool_options = {
  connectionString: "postgres://postgres.nwwthcmwtrdycdtviyck:cyfTodoList123@aws-0-eu-central-1.pooler.supabase.com:6543/postgres",
};

const pool = new Pool(pool_options);

// Display all todos from databse
export async function getAllTask() {
  const client = await pool.connect();

  const result = await client.query(
    "Select * FROM todos ORDER BY (case when completed then 1 else 0 end) ASC, id ASC"
  );
  client.release();
  return result.rows;
}

// Add new task to database
export async function addNewTask(newTask) {
  const client = await pool.connect();
  const result = await client.query(
    "INSERT INTO todos (task, completed) VALUES ($1, false )",
    [newTask]
  );
  client.release();
}

// Mark completed /uncompleted
export async function MarkAsCompleted(id) {
  const client = await pool.connect();
  const result = await client.query(
    "UPDATE todos SET completed = NOT completed WHERE id = $1",
    [id]
  );
  client.release();
}

// Delete single todo task
export async function DeleteSingleTask(id) {
  const client = await pool.connect();
  const result = await client.query("DELETE FROM todos WHERE id = $1", [id]);
  client.release();
}

// Delete completed task
export async function DeleteCompletedTask() {
  const client = await pool.connect();
  const result = await client.query("DELETE FROM todos WHERE completed");
  client.release();
}

// Delete all task
export async function DeleteAllTask() {
  const client = await pool.connect();
  const result = await client.query("DELETE FROM todos");
  client.release();
}
