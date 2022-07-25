import { Trash } from "phosphor-react";
import { ITask } from "../../App";
import styles from "./task.module.css";

interface TaskProps {
  task: ITask;
  onDelete: (deleteTodo: string) => void;
}

export function Task({ task, onDelete }: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>
        {task.title}
      </p>
      <button onClick={() => onDelete(task.id)} className={styles.btn}>
        <Trash size={20} />
      </button>
    </div>
  );
}
