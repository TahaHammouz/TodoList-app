import styles from "./ToDoFooter.module.css";
const ToDoFooter = (props) => {
  const { todos } = props;
  const totalCount = todos.length;
  const doneCount = todos.filter((todo) => todo.done).length;
  const remainingCount = todos.length - doneCount;

  return (
    <footer className={styles.counter}>
      <div className={styles.taskcounter}>
        Created Tasks <span>{totalCount}</span>
      </div>
      <div className={styles.donecounter}>
        Done Tasks{" "}
        <span>
          {doneCount} of {totalCount}
        </span>
      </div>
      <div className={styles.taskcounter}>
        Remaining <span>{remainingCount}</span>
      </div>
    </footer>
  );
};

export default ToDoFooter;
