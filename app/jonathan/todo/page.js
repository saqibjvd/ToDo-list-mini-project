'use client'  // this is a next.js directive that allows you to use 'useEffect'

import { useState } from 'react'
import Todo from './todo'

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: "learn React", completed: false },
    { id: 2, task: "learn Next.js", completed: true },
  ]);
  const clickHandler = (todo) => {
    todo.completed = !todo.completed;
    setTodos([...todos]);
  }

  return (
    <ol className="md:text-left lg:text-center">
      <p>Function style:</p>
      {
        todos.map((todo) => <Todo
          key={todo.id}
          todo={todo}
          clickHandler={clickHandler}
        />)
      }
    </ol>
  );
}
