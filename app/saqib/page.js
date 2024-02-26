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
    setNewTask(" ");
  }

  // to delete individual todo
  const deleteItem = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  // delete all items from list
  const deleteAllItems = (todo) => {
    setTodos([]);
  };

  const clickHandler = (todo) => {
    todo.completed = !todo.completed;
    setTodos([...todos])
  }

  return (
    <div>
      <div className="container">
        <div>
          <h1 className="header">To-do List ✏️</h1>
        </div>
        {/* form */}
        <div className="form-body text-align: center;">
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
        <div>
          {todos.map((todo, index) => {
            return (
              <li
                className={todo.completed ? "line-through" : ""}
                key={todo.id}
                onClick={(e) => clickHandler(todo)}
              >
                {todo.task}
                <button onClick={() => deleteItem(todo.id)} className="delete">
                  Delete
                </button>
              </li>
            );
          })}
        </div>

        <div></div>
      </div>
    </div>
  );
}




