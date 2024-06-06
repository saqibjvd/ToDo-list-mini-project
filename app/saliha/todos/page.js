'use client'

import { useState, useEffect } from 'react';
import AddTask from './addTodoAndDeleteCompletedTodo';
import TodoList from './todoList';

export default function Home() {
  const [todos, setTodos]= useState([]);

  useEffect(() => {
    fetch("/saliha/api/todo")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);



  return (
    <main className="max-w-4xl mx-auto mt-20 mb-15">
    <div>
      <h1 className="underline text-4xl text-center font-b mb-6">Todos App</h1>
      <AddTask setTodos={setTodos}/>
    </div>
      <TodoList todos={todos} setTodos={setTodos}/>
    </main>
  )
}

