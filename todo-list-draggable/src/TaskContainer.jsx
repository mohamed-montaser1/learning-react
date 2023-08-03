import List from "./List";
import ListElement from "./ListElement";
import useTodos from "./context/TodoContext";

export default function TaskContainer({ type }) {
  const { todos } = useTodos();
  return (
    <div className={`task-container ${type}`}>
      {/* <h3>{type}</h3> */}
      {type === "active" && <h3>Active</h3>}
      {type === "in-progress" && <h3>In Progress</h3>}
      {type === "complated" && <h3>Complated</h3>}
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
