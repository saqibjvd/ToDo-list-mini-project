
import { RiDeleteBin6Line } from "react-icons/ri";
import EditTaskForm from './editTask'

export default function Todo({ todo, clickHandler, onDelete, onUpdate}) {

  return (
    <tr key={todo.id}>

      {/* toggle */}
      <td className="td" size={15}
      onClick={() => clickHandler(todo)}>
        {todo.completed ? "☑" : "☐"}
        <span className={`${todo.completed ? "line-through" : ""}`}>
          {todo.task}
        </span>
      </td>

      {/* edit task */}
      <td className="td">
      <EditTaskForm taskId={todo.id} onUpdate={onUpdate} />
      </td>

      {/* delete one task */}
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
