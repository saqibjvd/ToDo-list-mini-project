"use client";
import React, { useState } from "react";

export default function TodoForm() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-imput"
        placeholder="Today's task"
        onChange={(e) => setValue(e.target.value)}>
     </input>
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
