import { ClipboardText } from "phosphor-react";

import { ITask } from "../../App";
import { Task } from "../Task";

import styles from "./tasks.module.css";

interface TasksProps {
  tasks: ITask[];
  onDelete: (deleteTodo: string) => void;
  onComplete: (taskComplete: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: TasksProps) {
  const quantidadeTaks = tasks.length;
  const quantidadeTaskCompletas = tasks.filter(
    (task) => task.isCompleted
  ).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{quantidadeTaks}</span>
        </div>
        <div>
          <strong className={styles.textPurple}>Concluídas</strong>
          <span>
            {quantidadeTaskCompletas} de {quantidadeTaks}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <ClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
