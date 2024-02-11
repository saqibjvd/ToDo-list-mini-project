import AddTask from './Components/AddTask';
import TodoList from './Components/TodoList';
import { Get } from '../../api';


export default async function Home() {
 
  const tasks = await Get();
  console.log(tasks);

  return (
    <main className="max-w-4xl mx-auto mt-20 mb-15">
        <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="underline text-2xl font-b mb-6">Todo List App</h1>
        <AddTask />
        </div>
        <TodoList tasks={tasks}/>
    </main>
  )
}
