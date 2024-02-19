
"use client"

import { FaPlus } from "react-icons/fa6";
import React, { useState } from 'react';
import Todo from './todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "learn react", completed: false },
    { id: 2, task: "learn next.js", completed: true },
    { id: 3, task: "learn about react props", completed: true },
    { id: 4, task: "todo mini app", completed: false }
  ]);
  const [task, setTask] = useState("");

  const setCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const addNewTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { task: task, completed: false }]);
      setTask("");
    }
  }; 

  const deleteTask = (completed) => {
    setTodos(todos.filter((todo) => todo.task !== completed));
  };

  return (
    <main className="max-w-4xl mx-auto mt-20 mb-15">
    <ol>
    <div>
      <h1 className="underline text-4xl text-center font-b mb-6">Todo App</h1>
    </div>
      <div  className="overflow-x-auto text-red">
        <button className="btn size={15} text-purple-900 bg-cyan-500 hover:bg-cyan-600 w-full" onClick={()=>document.getElementById('addTaskModal').showModal()}>
          Add Task
        <FaPlus className="font-b  text-purple-900" size={15} />
        </button>
        <dialog id="addTaskModal" className="modal">
          <div className="modal-box">
          <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Add Task</h3>
            <input 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs top-4" 
            />
       <button className='btn btn-sm btn-circle btn-ghost absolute right-4 bottom-2' onClick={addNewTask}>
        <div className="ml-auto">Add</div>
      </button>
      </div>
      </dialog>
      <table className="table">
        <thead>
          <tr>
            <th className="th">Task</th>
            <th className="th">Edit</th>
            <th className="th">Delete</th>
          </tr>
        </thead>
        
        <tbody>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              onToggle={() => setCompleted(index)}
              onDelete={() => deleteTask(todo.task)}
              onClick={() => updateTask(todo.task)}
            />
          ))}
        </tbody>

      </table>
    </div>
    </ol>
    </main>
  );
}
