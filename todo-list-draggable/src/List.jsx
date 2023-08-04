import useTodos from "./context/TodoContext";

export default function List({ children, type }) {
  const { todos, setTodos } = useTodos();
  const handleDragEnter = (e) => {
    e.target.classList.add("drag-over");
  };
  const handleDragLeave = (e) => {
    if (e.target.classList.contains("drag-over")) {
      e.target.classList.remove("drag-over");
    }
  };
  const hanldeDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    let id = e.dataTransfer.getData("text/plain");
    let element = todos.find((el) => el.id === id);
    if (!element) return;
    console.log(element);
    // if (element.mode === type) return;
    console.log(id);
    console.log(element);
    // setTodos((prev) => [...prev, { ...element, mode: type }]);
    let updatedTodos = [
      ...todos.filter((todo) => todo.id !== id),
      { ...element, mode: type },
    ];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    e.target.classList.remove("drag-over");
  };

  return (
    <ul
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={hanldeDragOver}
      onDrop={handleDrop}
      className={type}
    >
      {children}
    </ul>
  );
}
