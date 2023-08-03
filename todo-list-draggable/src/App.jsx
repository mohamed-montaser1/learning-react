import { nanoid } from "nanoid";
import Button from "./Button";
import Input from "./Input";
import TaskContainer from "./TaskContainer";

export default function App() {
  return (
    <>
      <h1>TO DO LIST</h1>
      <div className="container">
        <div className="input-container">
          <Input />
          <Button />
        </div>
        <div className="tasks-container">
          <TaskContainer type={"active"} key={nanoid()} />
          <TaskContainer type={"in-progress"} key={nanoid()} />
          <TaskContainer type={"complated"} key={nanoid()} />
        </div>
      </div>
    </>
  );
}
