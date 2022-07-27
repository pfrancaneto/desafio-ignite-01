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
      },
    ]);
  }

  function deleteTodo(deleteTodo: string) {
    const todoDeletado = task.filter((tasks) => tasks.id !== deleteTodo);
    setTask(todoDeletado);
  }

  function toogleTaskComplete(taskComplete: string) {
    const newTaks = task.map((task) => {
      if (task.id === taskComplete) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTask(newTaks);
  }

  return (
    <>
      <Header onAddNewTask={addNewTodo} />
      <Tasks
        tasks={task}
        onDelete={deleteTodo}
        onComplete={toogleTaskComplete}
      />
    </>
  );
}

export default App;
