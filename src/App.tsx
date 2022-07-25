import { useState } from "react";
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

  return (
    <>
      <Header onAddNewTask={addNewTodo} />
      <Tasks task={task} />
    </>
  );
}

export default App;
