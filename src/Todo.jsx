import React from "react";

export default function Todo({ todo, toggleCheck }) {
  function handleTodoClick() {
    //grabbing the unique id of the todo we clicked on
    toggleCheck(todo.id);
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}
