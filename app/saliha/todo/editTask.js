"use client"


import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import contactImage from '../Images/My Photo.jpg'
import { FiEdit } from "react-icons/fi";


// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };


export default function EditTaskForm() {
 const [open, setOpen] = useState(false);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 const [task, setTask] = useState("");


   const updateTask = (e) => {
   e.preventDefault();
   if (task.trim() !== "") {
     setEditedTask((prevTodos) =>{
       return prevTodos.map(todo => {
         if(todo.task === editedTask) {
           return {...todo, task: task}
         }
         return todo
       })
     }) 
   }
   setTask("");
 };

 return (
   <div>
     <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
       <Box sx={style}>
              <label for="">Edit the Task</label>
              <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full w-full"
              />
          
           <button class="edit-btn">Save</button>
       </Box>
     </Modal>
   </div>
 );
}
