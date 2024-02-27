
// destructured props style
export default function Todo({todo, clickHandler}) {
  return (
    <li
      className={todo.completed ? "text-2xl" : ""}
      onClick={() => clickHandler(todo)}
    >
      {todo.task} {todo.completed ? "☑" : "☐"}
    </li>
  );
}
