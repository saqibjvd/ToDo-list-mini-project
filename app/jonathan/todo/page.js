'use client'  // this is a next.js directive that allows you to use 'useEffect'

import { useState } from 'react'
import Todo from './todo'

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "learn React", completed: false },
    { task: "learn Next.js", completed: false },
  ]);
  return (
    <ol>
      <p>JSX style:</p>
      {
        todos.map((todo) => <Todo todo={todo}/>)
      }
      <p>Function style:</p>
      {
        todos.map((todo) => Todo({todo: todo}))
      }
      {/* <p>No Props style:</p>
      {
        todos.map((todo) => Todo(todo))
      } */}
    </ol>
  );
}
