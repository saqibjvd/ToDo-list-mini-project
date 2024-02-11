'use client'

import { FormEventHandler, useState } from 'react';
import Modal from './Modal'
import { AiOutlinePlus } from "react-icons/ai";
import { addTodo } from '../../../api';
import { useRouter } from 'next/navigation';
import { v4 } from "uuid";

export default function AddTask() {
  const [ modalOpen, setModalOpen] = useState(false);
  const [ newTaskValue, setNewTaskValue ] = useState<string>("");

  const router = useRouter();

  const handleAddNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: v4(),
      text: newTaskValue
    })
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  }

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="btn  text-purple-900 bg-cyan-500 w-full">
        Add New Task 
      <AiOutlinePlus className="font-b  text-purple-900" size={15}/>
      </button>
      <Modal modalOpen= {modalOpen} setModalOpen = {setModalOpen}>
      <form onSubmit={handleAddNewTask}>
        <h3 className='font-b text-lg'>Add new task</h3>
        <div className="modal-action">
        <input 
        value={newTaskValue}
        onChange={(e) => setNewTaskValue(e.target.value)}
        type="text" 
        placeholder="Type here" 
        className="input input-bordered w-full w-full" 
        />
        <button type='submit' className='btn btn-primary' >Submit</button>
        </div>
      </form>
      </Modal>
    </div>
  )
}
