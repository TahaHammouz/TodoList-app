function Task(props) {
  const { todo } = props;

  return (
    <>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => props.onToggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => props.delete(todo.id)}>X</button>
    </>
  );
}

export default Task;
