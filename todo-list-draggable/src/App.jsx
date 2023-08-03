import Button from "./Button";
import Input from "./Input";
import List from "./List";
import ListElement from "./ListElement";
import useTodos from "./context/TodoContext";

export default function App() {
  const { todos } = useTodos();
  return (
    <>
      <h1>TO DO LIST</h1>
      <div className="container">
        <div className="input-container">
          <Input />
          <Button />
        </div>
        <div className="tasks-container">
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
          <div className="task-container in-progress">
            <h3>In Progress</h3>
            <List type={"in-progress"}>
              {todos.map((todo) => {
                if (todo.mode !== "in-progress") return null;
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
          <div className="task-container complated">
            <h3>Complated</h3>
            <List type={"complated"}>
              {todos.map((todo) => {
                if (todo.mode !== "complated") return null;
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
        </div>
      </div>
    </>
  );
}
