"use client";

import React, { useState } from "react";

export default function TodoApp() {
  const [newTask, setNewTask] = useState(" "); // for new todo task from input

  const [todos, setTodos] = useState([
    { id: 1, task: "Study js", completed: false },
    { id: 2, task: "complete todo list react", completed: false },
    { id: 3, task: "Done the shopping", completed: false },
  ]);

  // this function will add new task to the list
  function addTask(e) {
    e.preventDefault();
    const newTodo = {
      id: todos[todos.length - 1].id + 1,
      task: newTask,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask(" "); // not working...this should clear input field
  }

  // to delete individual todo
  const deleteItem = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  // delete all items from list
  const deleteAllItems = (todo) => {
    setTodos([]);
  };

  return (
    <div>
      <div className="container">
        <div>
          <h1 className="header">To-do List ✏️</h1>
        </div>
        {/* form */}
        <div className="form-body">
          <form onSubmit={addTask}>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add task"
            />
            <button type="submit" className="add">
              Add
            </button>
          </form>
        </div>

        {/* Delete all task */}
        <div className="delete-all">
          <button onClick={() => deleteAllItems(todos)}>Delete all</button>
        </div>

        {/* display todo list */}
        {todos.map((todo, index) => {
          return (
            <li className={todo.completed ? "line-through" : ""} key={todo.id}>
              {todo.task}
              <button onClick={() => deleteItem(todo.id)}>Delete</button>
            </li>
          );
        })}

        <div></div>
      </div>
    </div>
  );
}

// click on task to mark as completed
// delete single task
// delete all completed task
// add css tailwind
