import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './tasks.module.css';

interface TasksProps {
  task: ITask[];
}


export function Tasks({ task }: TasksProps) {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>10</span>
        </div>
        <div>
          <strong className={styles.textPurple}>Concluídas</strong>
          <span>2 de 10</span>
        </div>
      </header>

      <div className={styles.list}>
        {task.map((tasks) => (
          <Task />
        ))}
      </div>
    </section>
  );
}