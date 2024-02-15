"use client";
import Image from "next/image";
import React, { useState } from "react";

const todos = [
  { task: "Study js", completed: false },
  { task: "complete todo list react", completed: false },
  { task: "Done the shopping", completed: true },
];

// Add Task button function
function add(e) {
}

// Delete task button function
function deleteTask(id) {}

// Delete all task button function
function deleteAllTask() {}

// mark task as completed function
// function markTodo(index) {
//   todos[index].completed = !todos[index].completed;
//    displayToDoList();
// }

export default function TodoApp() {
  const [newTask, setNewTask] = useState("");

  return (
    <div>
      <div className="container">
        <div>
          <h1>To-do List ✏️</h1>
        </div>
        <div className="form-body">
          <form id="todo-form" onSubmit={add}>
            <input
              type="text"
              id="new-todo"
              // value={newTask}
              onChange={(e) => console.log(e.target.value)}
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
            {todos && todos.length ? "" : "No task.."}
            {todos &&
              todos.map((todo) => (
                <li className="todo-li" key={todo.task}>
                  {todo.task}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
