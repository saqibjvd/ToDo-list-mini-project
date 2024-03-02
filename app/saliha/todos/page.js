
"use client"

import React, { useEffect, useState } from 'react';
import Todo from './todo';
import { FaPlus } from "react-icons/fa";


export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const BASE_URL = 'http://localhost:8080/todos'

useEffect(() => {
  fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if(!response.json){
        throw new Error('Failed to fetch todos')
      }
      return response.json()
    })
    .then((data) => {
      console.log(data)
      setTodos(data.todos);
    })
    .catch(error => console.log(error))
}, [])


  const clickHandler = (todo) => {
    todo.completed = !todo.completed;
    setTodos([...todos]);
  }

  const addNewTask = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/todos', {
        method: 'POST',
        body: JSON.stringify({
          task:task,
          completed: false
          }),
          headers: {
            'Content-Type': 'application/json'
          },
      });
        if (!response.ok) {
        throw new Error('Failed to add task');
      }
      const newTask = await response.json();
      setTodos([newTask, ...todos]);
      setTask("");
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };
  
  const updateTask = async(todo) => {
    const res = await fetch (`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo)
    })
    const updatedTodo = await res.json();
    return updatedTodo;
  };

  const deleteTask = async (id) => {
    console.log('deleteTask', id)
    try {
    await fetch(`http://localhost:8080/todos/${id}`, {
        method: 'DELETE'
        })
    // Update the todos state after deleting the task
    setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }; 

  const deleteAllCompletedTasks = (completed) => {
    const uncompletedTasks = todos.filter(todo => !todo.completed)
    setTodos(uncompletedTasks);
  }
  
  return (
    <main className="max-w-4xl mx-auto mt-20 mb-15">
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
          {todos.map((todo) => (   
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo}
              clickHandler={clickHandler}
              onDelete={() => deleteTask(todo.id)}
              onUpdate={updateTask}
            />
          ))}
        </tbody>
      </table>
    </div>
    
      {/* delete all completed tasks */}
      <button 
        className="btn size={15} text-purple-900 bg-cyan-500 hover:bg-red-600 w-full"
        onClick={() => deleteAllCompletedTasks()}
      >
        Delete Completed Tasks
      </button>
      
    </main>
  );
}
