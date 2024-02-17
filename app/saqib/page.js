"use client";

import React, { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Study js", completed: false },
    { id: 2, task: "complete todo list react", completed: false },
    { id: 3, task: "Done the shopping", completed: true },
  ]);

  const [newTask, setNewTask] = useState(" ");

  function addTask(e) {
    e.preventDefault();
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <div className="container">
        <div>
          <h1 className="header">To-do List ✏️</h1>
        </div>
        <div className="form-body">
          <form id="todo-form" onSubmit={addTask}>
            <input
              type="text"
              id="new-todo"
              // value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="New Task..."
            />

            <button type="submit" id="submit-new" className="button1">
              Add
            </button>
          </form>
        </div>
        {/* Delete all task */}
        <div className="delete-all">
          <button type="button" id="delete-completed" className="button2">
            Delete all
          </button>
        </div>
        <div>
          <ul className="todo-list">
            {/* display todo task */}
            {/* {todos && todos.length ? "" : "No task.."} */}
            {todos.map((todo) => (
              <li
                className={todo.completed ? "line-through" : ""}
                key={todo.id}
              >
                {todo.task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
