import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./global.css";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [task, setTask] = useState<ITask[]>([]);

  function addNewTodo(newTitle: string) {
    setTask([
      ...task,
      {
        id: crypto.randomUUID(),
        title: newTitle,
        isCompleted: false,
      }
    ])
  }

  function deleteTodo(deleteTodo: string) {
    const todoDeletado = task.filter(tasks => tasks.id !== deleteTodo);
    setTask(todoDeletado);
  }

  return (
    <>
      <Header onAddNewTask={addNewTodo} />
      <Tasks task={task} onDelete={deleteTodo} />
    </>
  );
}

export default App;
