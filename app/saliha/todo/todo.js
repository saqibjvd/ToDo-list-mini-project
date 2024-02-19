"use client"

import React, {useState} from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import Button from '@mui/material/Button';

export default function Todo({ todo, onToggle, onDelete, handleClickOpen}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editedTask, setEditedTask] = useState("");
  const [task, setTask] = useState("");

  return (
    <tr>
      {/* toggle */}
      <td className="td" 
      onClick={onToggle}>
        {/* {todo.task} {todo.completed ? "☑" : "☐"} */}
        <span className={`${todo.completed ? "line-through" : ""}`}>
          {todo.task}
        </span>
      </td>

      <td className="td">
      <Button onClick={handleOpen}
      className="btn text-red-800">
        <FiEdit />
      </Button>
      </td>

      {/* delete button */}
      <td className="td">
        <button 
        className="btn text-red-800"
        onClick={onDelete}
        >
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  );
}
