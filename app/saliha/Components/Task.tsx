
'use client'

import { FormEventHandler, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../../api";
import { ITask } from "../../../types/tasks";
import { Checkbox } from "@nextui-org/react";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [newEditedValue, setNewEditedValue] = useState<string>(task.text);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleEditTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: newEditedValue,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  const toggleTodo = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr key={task.id} >
      <td>
        <label>
            <input 
            type="checkbox" 
            className="px-4 cursor-pointer size-4 text-cyan-500" 
            checked = {isChecked}
            onChange={toggleTodo}          
            />
            <span className={`${isChecked ? "line-through" : ""}`}>
              {task.text}
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
                  className="input input-bordered w-full w-full"
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
            <RiDeleteBin6Line size={20} className="text-red-500" cursor={"pointer"} />
          </button>
          <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
            <h3 className="text-lg">Are you sure you want to delete the task?</h3>
            <div className="modal-action">
              <button className="btn" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </button>
            </div>
          </Modal>
        </div>
      </td>
    </tr>
  );
};

export default Task;
