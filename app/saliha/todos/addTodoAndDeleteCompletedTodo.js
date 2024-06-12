"use client";

import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Modal from "../Modal";

export default function AddTask({ setTodos }) {
  const [newTask, setNewTask] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  async function handleAddNewTask(e) {
    e.preventDefault();

    await fetch("/saliha/api/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: newTask }),
    })
      .then((response) => response.json())
      .then((response) => setTodos(response));
    setNewTask("");
    router.refresh();
  }

  const handleDeleteCompletedTasks = async () => {
    try {
      const response = await fetch(`/saliha/api/todo`, {
        method: "DELETE",
        body: JSON.stringify({ completed: true }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete completed tasks");
      }
      const todos = await response.json();
      setTodos(todos);
      router.refresh();
    } catch (error) {
      console.error("Error deleting completed tasks", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn  text-purple-900 bg-cyan-500 hover:bg-cyan-300 w-full"
      >
        Add New Task
        <AiOutlinePlus className="font-b  text-purple-900" size={15} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleAddNewTask}>
          <h3 className="font-b text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Modal>
      <button
        onClick={handleDeleteCompletedTasks}
        className="btn size={15} text-purple-900 bg-cyan-500 hover:bg-red-600 w-full"
      >
        Delete Completed Tasks
      </button>
    </div>
  );
}
