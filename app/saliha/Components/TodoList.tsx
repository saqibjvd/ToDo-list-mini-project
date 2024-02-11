import { ITask } from "../../../types/tasks";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}


const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div>
      <div>
  <table>
    {/* head */}
    <thead>
      <tr>
        <th className="th">Task</th>
        <th className="th">Edit</th>
        <th className="th">Delete</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => <Task key={task.id} task={task}/>)}
    </tbody>
        </table>
     </div>
  </div>
  )
}
export default TodoList;
