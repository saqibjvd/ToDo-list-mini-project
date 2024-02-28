"use client";
import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <section>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
      <footer>Made by dami</footer>
    </section>
  );
};

export default Tasks;
