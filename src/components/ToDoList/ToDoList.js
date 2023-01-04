import Task from "../Task/Task";

const ToDoList = (props) => {
    return (
        <ul>
          {props.todos.map((todo) => (
            <li key={todo.id}>
              <Task todo={todo} onToggleTodo={props.onToggleTodo} />
            </li>
          ))}
        </ul>
      );
};

export default ToDoList;
