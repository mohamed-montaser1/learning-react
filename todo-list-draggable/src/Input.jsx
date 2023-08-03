import useTodos from "./context/TodoContext";

export default function Input() {
  let { inputValue, setInputValue } = useTodos();
  return (
    <>
      <input
        type="text"
        className="input"
        placeholder="Enter New Task 🔥"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
}
