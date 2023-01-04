import { ToDoList, AddToDo, SearchTodo, ToDoFooter } from "./components/index";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };


  return (
    <div>
      <AddToDo onAddTodo={handleAddTodo} />
      <ToDoList todos={todos} onToggleTodo={handleToggleTodo} />
    </div>
  );
}

export default App;
