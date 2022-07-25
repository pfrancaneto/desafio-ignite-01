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
  const [task, setTask] = useState<ITask[]>([
    {
      id: crypto.randomUUID(),
      title: 'teste',
      isCompleted: true,
    }
  ]);

  return (
    <>
      <Header />
      <Tasks task={task} />
    </>
  );
}

export default App;
