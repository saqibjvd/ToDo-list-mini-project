"use client";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
const Page = () => {
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete project proposal",
      day: "Monday",
      reminder: true,
    },
    {
      id: 2,
      text: "Buy groceries",
      day: "Wednesday",
      reminder: false,
    },
    {
      id: 3,
      text: "Call mom",
      day: "Friday",
      reminder: true,
    },
  ]);
  const deleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
    console.log(id)
};
  return (
    <div className="container">
      <Header title="TO-DO LIST" />
      <Tasks tasks={tasks} onDelete = {deleteTodo}/>
    </div>
  );
};

export default Page;
