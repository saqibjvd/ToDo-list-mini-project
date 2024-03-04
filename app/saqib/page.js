"use client";

import React, { useState } from "react";

export default function TodoApp() {
  const [newTask, setNewTask] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, task: "Practice more js", completed: false },
    { id: 2, task: "Learn React", completed: false },
    { id: 3, task: "Complete Todo list project", completed: false },
    { id: 4, task: "Learn tailwind", completed: true },
  ]);

  // this will add new task to the list
  function addTask(e) {
    e.preventDefault();
    if (newTask.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        task: newTask,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask(" ");
    }
  }

  // to delete single todo task
  const deleteItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // delete completed task from list
  const deleteCompletedTask = (todo) => {
    const CompletedTodos = todos.filter((todo) => !todo.completed);
    setTodos(CompletedTodos);
  };

  // Delete all task
  const DeleteAllTask = (todos) => {
    console.log("im clicked");
    setTodos([]);
  };

  // // mark task as completed /uncompleted
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
                    <span onClick={() => clickHandler(todo)}>{todo.task}</span>
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
