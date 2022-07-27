import { Trash, CheckCircle } from "phosphor-react";
import { ITask } from "../../App";
import styles from "./task.module.css";

interface TaskProps {
  task: ITask;
  onComplete: (taskComplete: string) => void;
  onDelete: (deleteTodo: string) => void;
}

export function Task({ task, onDelete, onComplete }: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <CheckCircle weight="fill" /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>
      <button onClick={() => onDelete(task.id)} className={styles.btn}>
        <Trash size={20} />
      </button>
    </div>
  );
}
