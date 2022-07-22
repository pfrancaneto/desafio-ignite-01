import { Task } from '../Task';
import styles from './tasks.module.css';

const tasks = [
  1,
  2,
];

export function Tasks() {
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
        {tasks.map(task => {
          return <Task />
        })}
      </div>
    </section>
  );
}