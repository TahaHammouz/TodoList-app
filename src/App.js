import { ToDoList, AddToDo, SearchTodo, ToDoFooter } from "./components/index";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [hideDone, setHideDone] = useState(false);
  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };
  const filteredTodos = todos
    .filter((todo) => todo.text.includes(searchQuery))
    .filter((todo) => !(hideDone && todo.done));

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
  const handleSearchTodo = (query) => {
    setSearchQuery(query);
  };
  const handleToggleHideDone = () => {
    setHideDone(!hideDone);
  };
  const handleDeleteTodo = (idToDelete) =>
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== idToDelete)
    );

  return (
    <div>
      <AddToDo onAddTodo={handleAddTodo} />

      <SearchTodo onSearchTodo={handleSearchTodo} />
      <label>
        <input
          type="checkbox"
          checked={hideDone}
          onChange={handleToggleHideDone}
        />
        {hideDone ? "Show" : "Hide"} Done
      </label>
      <ToDoList onDelete={handleDeleteTodo} todos={filteredTodos} onToggleTodo={handleToggleTodo} />
      <ToDoFooter todos={filteredTodos} />
    </div>
  );
}

export default App;
