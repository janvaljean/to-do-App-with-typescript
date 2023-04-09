import React from "react";
import { todoType } from "../appTypes";

type PropsType = {
  task: todoType;
  deleteTask(name: string): void;
};

const TodoItem = ({ task, deleteTask }: PropsType) => {
  return (
    <div className="cards">
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button onClick={() => deleteTask(task.taskName)}>Delete Task</button>
      </div>
    </div>
  );
};

export default TodoItem;
