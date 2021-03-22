//using hook components
import React, { useState, useRef, useEffect } from "react";
//Importing component for use
import TodoList from "./TodoList";
//using this to create random unique IDS in our handleAdd function
import uuidv4 from "uuid/dist/v4";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  // eslint-disable-next-line
  //{ id: 1, name: "Todo", complete: false }
  const [todos, setTodos] = useState([]);
  const todoRef = useRef();

  //retrieving and outputting the local data stored
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  //local data storing
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleCheck(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    //changing from false to true
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }
  function handleAdd(e) {
    const name = todoRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });

    //reset the name field after button is clicked
    todoRef.current.value = null;
  }

  function handleClear() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    //using fragment so the component can return multiple elements.
    <React.Fragment>
      <TodoList todos={todos} toggleCheck={toggleCheck} />
      <input ref={todoRef} type="text"></input>
      <button onClick={handleAdd}> Add item to list</button>
      <button onClick={handleClear}> Clear completed items from list</button>
      <div>
        {todos.filter((todo) => !todo.complete).length} chores left to do
      </div>
    </React.Fragment>
  );
}

export default App;
