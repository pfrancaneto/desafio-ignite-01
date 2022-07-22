import styles from "./header.module.css";

import Logo from "../../assets/Logo.png";
import { PlusCircle } from "phosphor-react";
import React from "react";

export function Header() {
  const handleCreateNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('oi');
  };

  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />

      <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
        <input placeholder="Adicione uma tarefa" type="text" />
        <button>
          Criar
          <PlusCircle size={20} weight="bold" />
        </button>
      </form>
    </header>
  );
}
