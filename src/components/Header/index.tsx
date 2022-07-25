import styles from "./header.module.css";

import Logo from "../../assets/Logo.png";
import { PlusCircle } from "phosphor-react";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface HeaderProps {
  onAddNewTask: (newTitle: string) => void;
}

export function Header({ onAddNewTask }: HeaderProps) {
  const [title, setTitle] = useState('');
  
  function handleNewTodo(event: FormEvent) {
    event.preventDefault();
    onAddNewTask(title);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />

      <form onSubmit={handleNewTodo} className={styles.newTaskForm}>
        <input 
          placeholder="Adicione uma tarefa" 
          type="text" 
          onChange={handleChange}
        />
        <button type="submit">
          Criar
          <PlusCircle size={20} weight="bold" />
        </button>
      </form>
    </header>
  );
}
