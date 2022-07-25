import { Trash } from "phosphor-react";
import { ITask } from "../../App";
import styles from "./task.module.css";

interface TaskProps {
  task: ITask;
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>
        {task.title}
      </p>
      <button className={styles.btn}>
        <Trash size={20} />
      </button>
    </div>
  );
}
