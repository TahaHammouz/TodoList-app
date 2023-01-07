import { useState } from "react";
import styles from "./SearchTodo.module.css";
function SearchTodo(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearchTodo(searchQuery);
  };

  return (
    <form>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyUp={handleSubmit}
        className={styles.searchQuery}
        placeholder="Search Your To-Do"
      />
    </form>
  );
}

export default SearchTodo;
