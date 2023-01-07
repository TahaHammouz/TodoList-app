import styles from "./AddToDo.module.css";
import { useState } from "react";
const AddToDo = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      props.onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        className={styles.input}
        placeholder="Eg. Go To GYM !!"
      />
      <button className={styles.submitButton} type="submit">Create</button>
    </form>
  );
};

export default AddToDo;
