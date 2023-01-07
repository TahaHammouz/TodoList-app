import Task from "../Task/Task";
import styles from "./ToDoList.module.css";

const ToDoList = (props) => {
  return (
  
      <ul className={styles.list}>
        {props.todos.map((todo) => (
          <li key={todo.id} className={styles.task} >
            <Task
              delete={props.onDelete}
              todo={todo}
              onToggleTodo={props.onToggleTodo}
            />
          </li>
        ))}
      </ul>

  );
};

export default ToDoList;
