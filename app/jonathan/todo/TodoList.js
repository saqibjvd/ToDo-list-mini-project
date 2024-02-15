'use client'; // this is a next.js directive that allows you to use 'useEffect'

import { useState } from 'react';
import Todo from './todo';


export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "learn React", completed: false },
    { task: "learn Next.js", completed: true },
  ]);
  const setCompleted = (index) => {
    // todos[index].completed = !todos[index].completed;
    // setTodos(todos);
    setTodos((prevTodos) => {
      prevTodos[];
      todos[index].completed = !todos[index].completed;
    });
  };

  return (
    <ol>
      <p>Function style:</p>
      {todos.map((todo, index) => Todo(
        {
          todo: todo,
          onClick: () => setCompleted(index),
        }
      ))}
    </ol>
  );
}
