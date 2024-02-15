
// destructured props style
export default function Todo({todo}) {
  return (
    <li>{todo.task}</li>
  );
}

// // not destructured props style:
// export default function Todo(props) {
//   return (
//     <li>{props.todo.task}</li>
//   );
// }

// // No Props style:
// export default function Todo(todo) {
//   return (
//     <li>{todo.task}</li>
//   );
// }
