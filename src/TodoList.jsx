import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleCheck }) {
  return todos.map((todo) => {
    //passing mapped todo to our component && using a key to only rerender the
    //value in the array that is changed instead of the whole array
    return <Todo key={todo.id} todo={todo} toggleCheck={toggleCheck} />;
  });
}
