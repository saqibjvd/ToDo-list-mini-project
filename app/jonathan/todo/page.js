'use client'  // this is a next.js directive that allows you to use 'useEffect'

import { useState, useEffect } from 'react'
import Todo from './todo'

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(
      "/saliha/api/todo"
    ).then((response) => {
      return response.json()
    }).then((response_json) => {
      setTodos(response_json);
    });
  }, []);

  const clickHandler = (todo) => {
    fetch(
      `/jonathan/api/todo/${todo.id}`,
      { method: 'DELETE' }
    ).then((response) => {
      return response.json()
    }).then((response_json) => {
      setTodos(response_json);
    })
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
