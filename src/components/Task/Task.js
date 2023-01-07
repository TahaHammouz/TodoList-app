import styles from "./Task.module.css";
function Task(props) {
  const { todo } = props;

  return (
    <>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.done}
        onChange={() => props.onToggleTodo(todo.id)}
        aria-pressed={todo.done}
        className={styles.graphic}
        label="Toggle Todo"
      />
      <label htmlFor={todo.id} className={styles.content}>
        <span
          style={{
            textDecoration: todo.done ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </label>

      <button
        className={styles.deleteButton}
        onClick={() => props.delete(todo.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="216"
            y1="56"
            x2="40"
            y2="56"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="104"
            y1="104"
            x2="104"
            y2="168"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="152"
            y1="104"
            x2="152"
            y2="168"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <path
            d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
          <path
            d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
        </svg>
      </button>
    </>
  );
}

export default Task;
