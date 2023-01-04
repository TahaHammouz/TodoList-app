const ToDoFooter = (props) => {
  const { todos } = props;
  const totalCount = todos.length;
  const doneCount = todos.filter((todo) => todo.done).length;
  const remainingCount = todos.length - doneCount;

  return (
    <p>
      {doneCount} done / {remainingCount} remaining / {totalCount} total
    </p>
  );
};

export default ToDoFooter;
