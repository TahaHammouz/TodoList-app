import { useState } from "react";

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
      />
    </form>
  );
}

export default SearchTodo;
