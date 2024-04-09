  export let todos =
    [
      {
        id: 1, 
        task: "learn react", 
        completed: false 
      },
      {
        id: 2, 
        task: "learn next.js", 
        completed: true 
      },
      {
        id: 3, 
        task: "learn about react props", 
        completed: true
      },
      {
        id: 4, 
        task: "todo mini app", 
        completed: false
      }
    ];

    export function getTodos() {
      return todos;
    }

    export function AddTodo(newTask){
      const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
      const newTodo = {
        id: id,
        // id: todos[todos.length - 1].id + 1,
        task: newTask,
        completed: false,
      };
      todos.push(newTodo);
    }

    export function deleteTodo(id) {
      try {
        todos = todos.filter((todo) => todo.id !== id);
      } catch (error) {
        console.error("Error deleting todo:", error);
      }
    }

    export const deleteCompletedTasks = () => {
      todos = todos.filter(todo => !todo.completed);
      return todos;
    }

    export function updateTodo(id, task, completed){
      const todoToUpdate = todos.find((todo) => todo.id === id); 
      if (!todoToUpdate) {
        return false
      }
      // Update the task of the found todo item
      todoToUpdate.task = task;
      todoToUpdate.completed = completed; 
    }
