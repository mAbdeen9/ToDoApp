import "./App.css";
import Header from "./components/Header/Header";
import Day from "./components/Day/Day";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  const getTask = (data) => {
    setTask((prev) => {
      return [data, ...prev];
    });
  };

  return (
    <div className="container box">
      <Header></Header>
      <Day></Day>
      <AddTask getTask={getTask}></AddTask>
      <div>
        {task.map((data) => {
          return <Tasks data={data} key={Math.random()}></Tasks>;
        })}
      </div>
    </div>
  );
}

export default App;
