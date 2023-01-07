import {
  ToDoList,
  AddToDo,
  SearchTodo,
  ToDoFooter,
  Header,
} from "./components/index";
import { useState } from "react";
import "./App.css";
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
    <div className="wrapper">
      <Header />
      <main className="content">
        <AddToDo onAddTodo={handleAddTodo} />
        <SearchTodo onSearchTodo={handleSearchTodo} />
        <button onClick={handleToggleHideDone} className="ToggleHideDonebtn">
          {hideDone ? "Show" : "Hide"} Done
        </button>

        <ToDoList
          onDelete={handleDeleteTodo}
          todos={filteredTodos}
          onToggleTodo={handleToggleTodo}
        />

        <ToDoFooter todos={filteredTodos} />
      </main>
    </div>
  );
}

export default App;
