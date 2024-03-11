'use client'  // this is a next.js directive that allows you to use 'useEffect'

import { useState, useEffect } from 'react'
import Todo from './todo'

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(
      "/jonathan/api/todo"
    ).then((response) => {
      return response.json()
    }).then((response_json) => {
      setTodos(response_json);
    });
  }, []);

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
