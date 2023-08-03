// 1) CREATE CONTEXT
// 2) PROVIDE VALUE TO CHILDS
// 3) USE THIS VALUE INSIDE CHILDS

import { nanoid } from "nanoid";
import { createContext, useContext, useState } from "react";

let TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );
  const [inputValue, setInputValue] = useState("");

  const addTodo = (todo) => {
    let newTodo = { id: nanoid(), title: todo, mode: "active" };
    setTodos((prev) => [...prev, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  let providedValue = {
    todos,
    setTodos,
    addTodo,
    inputValue,
    setInputValue,
  };

  return (
    <>
      <TodoContext.Provider value={providedValue}>
        {children}
      </TodoContext.Provider>
    </>
  );
}

export default function useTodos() {
  return useContext(TodoContext);
}
