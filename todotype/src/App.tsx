import { ChangeEvent, FC, useState } from "react";
import "./App.css";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [day, setDay] = useState<number>(0);
  const [tasks, setTasks] = useState<Array<string>>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (name === "task") {
      setTask(value);
    } else {
      setDay(Number(value));
    }
  };
  console.log(task,day)
 

  return (
    <div className="App">
      <div>
        <input
          value={task}
          type="text"
          placeholder="Enter a task"
          onChange={handleChange}
          name="task"
        />
        <input
          type="number"
          placeholder="In how many days should it be finished"
          value={day}
          onChange={handleChange}
          name="day"
        />
        <button >Add new Task</button>
      </div>
    </div>
  );
};

export default App;
