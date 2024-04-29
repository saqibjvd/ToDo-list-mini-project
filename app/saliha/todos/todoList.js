import Todo from "./todo";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="overflow-x-auto text-red">
      <table className="table">
        <thead>
          <tr>
            <th className="th">Task</th>
            <th className="th">Edit</th>
            <th className="th">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo setTodos={setTodos} key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
