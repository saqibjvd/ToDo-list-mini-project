
// destructured props style
export default function Todo({todo, onClick}) {
  return (
    <li className={todo.completed ? "line-through" : ""} onClick={onClick}>
      {todo.task} {todo.completed ? "☑" : "☐"}
    </li>
  );
}
