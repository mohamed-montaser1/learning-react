import useTodos from "./context/TodoContext";

export default function ListElement({ title, id, mode }) {
  const { todos, setTodos } = useTodos();

  const handleDragStart = (e) => {
    console.dir(e.target);
    e.dataTransfer.setData("text/plain", id);
  };
  const removeItem = () => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  return (
    <>
      <li
        draggable="true"
        onDragStart={handleDragStart}
        id={id}
        mode={mode}
        onDoubleClick={removeItem}
      >
        {title}
      </li>
    </>
  );
}
