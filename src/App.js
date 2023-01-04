import { ToDoList, AddToDo, SearchTodo, ToDoFooter } from "./components/index";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };


  return (
    <div>
      <AddToDo onAddTodo={handleAddTodo} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
