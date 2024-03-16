"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTodo from "./components/AddTodo";
const Page = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("/dami/api/todos")
      .then((reponse) => reponse.json())
      .then((tasks) => setTasks(tasks));
  }, []);
  const deleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header title="TO-DO LIST" />
      <AddTodo />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTodo} />
      ) : (
        "No task to show"
      )}
    </div>
  );
};

export default Page;
