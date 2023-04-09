import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { todoType } from "./appTypes";
import TodoItem from "./components/TodoItem";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [day, setDay] = useState<number>(0);
  const [tasks, setTasks] = useState<todoType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (name === "task") {
      setTask(value);
    } else {
      setDay(Number(value));
    }
  };
  console.log(task, day);
  const addNewTask = ():void => {
    const newTask = { taskName: task, workDay: day }; // {task,day}
    setTasks([...tasks, newTask]);
    setTask("");
    setDay(0);
  };
  console.log(tasks);
  const deleteTask = (taskName:string): void => {
    const filteredTask = tasks.filter(task => task.taskName !== taskName)
    setTasks(filteredTask)
  };
  
  return (
    <div className="App">
      <div className="inputContainer">
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
        <button onClick={addNewTask}>Add new Task</button>
      </div>
      <div className="taskList">
        <h1>Your Tasks</h1>
        <div className="cardContainer">
           {tasks.map((task:todoType,index:number)=>{
          return <TodoItem key={index} task={task} deleteTask={deleteTask} />;
        })}
        </div>
       

      </div>
    </div>
  );
};

export default App;
