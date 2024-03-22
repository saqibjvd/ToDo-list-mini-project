"use client";

import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

export default function TodoApp() {
  const [newTask, setNewTask] = useState("");

  const [todos, setTodos] = useState([]);

  // display todo list from backend
  useEffect(() => {
    fetch("/saqib/api/todo")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setTodos(response);
      });
  }, []);

  // this will add new task to the list
  function addTask(e) {
    e.preventDefault();
    fetch("/saqib/api/todo", {
      method: "POST",
      body: JSON.stringify({ newTask }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setTodos(response);
        setNewTask("");
      });
  }

  // to delete single todo task

  const deleteItem = async (id) => {
    fetch("/saqib/api/todo", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setTodos(response);
        // setNewTask("");
      });
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  // delete completed task from list
  const deleteCompletedTask = (todo) => {
    const CompletedTodos = todos.filter((todo) => !todo.completed);
    setTodos(CompletedTodos);
  };

  // Delete all task
  const DeleteAllTask = (todos) => {
    setTodos([]);
  };

  // mark task as completed /uncompleted
  const clickHandler = (todo) => {
    todo.completed = !todo.completed;
    setTodos([...todos]);
  };

  return (
    <div>
      <div className="container">
        <div>
          <h2 className="todo-heading">To-do List ✏️</h2>
        </div>

        {/* form */}
        <div className="form-body">
          <form onSubmit={addTask}>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add task here..."
            />
            <button className="button-add" type="submit">
              Add Task
            </button>
          </form>
        </div>

        {/* Delete completed task */}
        <div className="buttons">
          <button
            className="delete-completed"
            onClick={() => deleteCompletedTask(todos)}
          >
            Delete Completed
          </button>
          <button className="delete-all" onClick={() => DeleteAllTask(todos)}>
            Delete All
          </button>
        </div>
        <hr></hr>

        {/* display todo list */}
        <div>
          {todos.map((todo) => {
            return (
              <>
                <ul>
                  <li
                    className={todo.completed ? "line-through" : ""}
                    key={todo.id}
                  >
                    <span onClick={() => clickHandler(todo)}>
                      {todo.id}. {todo.task}
                    </span>
                    {/* Delete single task */}
                    <button
                      className="delete"
                      onClick={() => deleteItem(todo.id)}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
