
// destructured props style
export default function Todo({todo, onClick}) {
  return (
    <li onClick={onClick}>
      {todo.task} {todo.completed ? "☑" : "☐"}
    </li>
  );
}
