import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './tasks.module.css';

interface TasksProps {
  task: ITask[];
}


export function Tasks({ task }: TasksProps) {
  const quantidadeTaks = task.length;
  const quantidadeTaskCompletas = task.filter(tasks => tasks.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{quantidadeTaks}</span>
        </div>
        <div>
          <strong className={styles.textPurple}>Concluídas</strong>
          <span>{quantidadeTaskCompletas} de {quantidadeTaks}</span>
        </div>
      </header>

      <div className={styles.list}>
        {task.map((tasks) => (
          <Task key={tasks.id} task={tasks} />
        ))}
      </div>
    </section>
  );
}