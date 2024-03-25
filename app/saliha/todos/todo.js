"use client";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Modal from "../Modal";
import { useRouter } from "next/navigation";

export default function Todo({ todo, setTodos }) {
  const [isChecked, setIsChecked] = useState(todo.task);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [newEditedValue, setNewEditedValue] = useState("");
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const router = useRouter();

  const toggleTodo = () => {
    setIsChecked(!isChecked);
  };

  const handleEditTask = async (e) => {
    e.preventDefault();
    if (!newEditedValue.trim()) {
      console.error("Task value is empty");
      return;
    }
    try {
      const todoToUpdate = {
        task: newEditedValue
      };
      await fetch(`/saliha/api/todo/${todo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoToUpdate),
      })
      setOpenModalEdit(false);
      router.refresh();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDeleteTask = async (todo) => {
    await fetch(`/saliha/api/todo/${todo.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
  }

  return (
    <tr key={todo.id}>
      <td>
        <label>
          <input
            type="checkbox"
            className="px-4 cursor-pointer size-4 text-cyan-500"
            onChange={toggleTodo}
          />
          <span className={`${!isChecked ? "line-through" : ""}`}>
            {todo.task}
          </span>
        </label>
      </td>

      <td>
        <div>
          <button onClick={() => setOpenModalEdit(true)}>
            <FiEdit size={20} className="text-cyan-500" cursor={"pointer"} />
          </button>
          <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form onSubmit={handleEditTask}>
              <h3 className="font-b text-lg">Edit the task</h3>
              <div className="modal-action">
                <input
                  value={newEditedValue}
                  onChange={(e) => setNewEditedValue(e.target.value)}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <button type="submit" className="btn">
                  Edit Task
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </td>

      <td>
        <div>
          <button onClick={() => setOpenModalDelete(true)}>
            <RiDeleteBin6Line
              size={20}
              className="text-red-500"
              cursor={"pointer"}
            />
          </button>
          <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
            <h3 className="text-lg">
              Are you sure you want to delete the task?
            </h3>
            <div className="modal-action">
              <button className="btn" onClick={() => handleDeleteTask(todo)}>
                Delete
              </button>
            </div>
          </Modal>
        </div>
      </td>
    </tr>
  );
}
