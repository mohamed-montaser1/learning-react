import useTodos from "./context/TodoContext";

export default function Button() {
  let { inputValue, setInputValue, addTodo } = useTodos();
  const handleAddTodo = () => {
    if (inputValue === "") return alert("Please Enter Value In Input!")
    addTodo(inputValue);
    setInputValue("");
  };
  return <button onClick={handleAddTodo}>Add</button>;
}
