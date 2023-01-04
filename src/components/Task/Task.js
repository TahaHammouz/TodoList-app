function Task(props) {
  const { todo } = props;

  return (
    <>
      <input
        type="checkbox"
        checked={todo.done}
      />
      <span >
        {todo.text}
      </span>
    </>
  );
}

export default Task;
