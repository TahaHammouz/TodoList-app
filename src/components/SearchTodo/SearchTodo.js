import { useState } from "react";
import styles from "./SearchTodo.module.css";
function SearchTodo(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearchTodo(searchQuery);
  };

  return (
    <form onKeyUp={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className={styles.searchQuery}
        placeholder="Search Your To-Do"
      />
    </form>
  );
}

export default SearchTodo;
