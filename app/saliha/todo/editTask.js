"use client"


import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { FiEdit } from "react-icons/fi";

export default function EditTaskForm({taskId, onUpdate}) {
  const [open, setOpen] = useState(false);
  const [updatedTask, setUpdatedTask] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = () => {
    onUpdate(taskId, updatedTask);
    handleClose();
  }

 return (
   <div>
      <Button onClick={handleOpen}
      className="btn text-red-800">
        <FiEdit />
      </Button>
     <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
       <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 border-2 shadow-lg p-4">

       <h3 className="font-bold text-lg">Edit the Task</h3>
              <input
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs top-4"
              />         
           <button onClick={handleUpdate} className="edit-btn btn-sm btn-circle btn-ghost absolute right-2 bottom-1">
           <div className="ml-auto">Save</div>
           </button>
       </Box>
     </Modal>
   </div>
 );
}
