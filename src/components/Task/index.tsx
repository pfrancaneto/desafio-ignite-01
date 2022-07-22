import { Trash } from "phosphor-react";
import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer asdasdasdasda.
      </p>
      <button className={styles.btn}>
        <Trash size={20} />
      </button>
    </div>
  );
}
