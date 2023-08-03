import List from "./List";
import ListElement from "./ListElement";
import useTodos from "./context/TodoContext";

export default function TaskContainer() {
  const { todos } = useTodos();
  return (
    <div className="task-container active">
      <h3>Active</h3>
      <List type={"active"}>
        {todos.map((todo) => {
          if (todo.mode !== "active") return null;
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
