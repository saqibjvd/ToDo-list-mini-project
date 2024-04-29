import pg from "pg";

const { Pool } = pg;

const pool_options = { connectionString: process.env.DATABASE_URL };

const pool = new Pool(pool_options);

export async function getTodos() {
  try {
    const result = await pool.query("SELECT * FROM todos");

    return result.rows; // Return the fetched todos
  } catch (error) {
    console.error("Error fetching todos", error);
    throw new Error("Failed to fetch todos");
  }
}

export async function AddTodo(newTask) {
  try {
    const result = await pool.query(
      "INSERT INTO todos(task, completed) VALUES($1, false) RETURNING id",
      [newTask]
    );
    console.log("Insert successful");
    return result;
  } catch (error) {
    console.error(`Failed to add task`, error);
    throw error;
  }
}

export async function updateTodo(id, task, completed) {
  try {
    const result = await pool.query(
      `UPDATE todos SET task = $1, completed = $2 WHERE id = $3`,
      [task, completed, id]
    );
    return result;
  } catch (error) {
    console.error("Error updating todo", error);
    throw error;
  }
}

export async function deleteTodo(id) {
  try {
    const result = await pool.query("DELETE FROM todos WHERE id=$1", [id]);
    console.log(`Task ${id} deleted!`);
    return result;
  } catch (error) {
    console.error("Error deleting todo", error);
    throw error;
  }
}

export async function deleteCompletedTasks() {
  try {
    const result = await pool.query("DELETE FROM todos WHERE completed=$1", [
      true,
    ]);
    console.log("Completed tasks deleted");
    return result;
  } catch (error) {
    console.error("Error deleting completed tasks", error);
    throw error;
  }
}
