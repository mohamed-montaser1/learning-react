import List from "./List";
import ListElement from "./ListElement";
import useTodos from "./context/TodoContext";

export default function TaskContainer({ type }) {
  const { todos } = useTodos();
  return (
    <div className={`task-container ${type}`}>
      <h3>Active</h3>
      <List type={type}>
        {todos.map((todo) => {
          if (todo.mode !== type) return null;
          return (
            <ListElement
              key={todo.id}
              title={todo.title}
              id={todo.id}
              mode={todo.mode}
            />
          );
        })}
      </List>
    </div>
  );
}
