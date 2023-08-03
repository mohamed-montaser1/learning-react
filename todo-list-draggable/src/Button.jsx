import useTodos from "./context/TodoContext";

export default function Button() {
  let { inputValue, setInputValue, addTodo } = useTodos();
  const handleAddTodo = () => {
    addTodo(inputValue);
    setInputValue("");
  };
  return <button onClick={handleAddTodo}>Add</button>;
}
