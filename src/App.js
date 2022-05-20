import "./App.css";
import Header from "./components/Header/Header";
import Day from "./components/Day/Day";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(JSON.parse(localStorage.getItem("data")));
  }, []);

  const getTask = (data) => {
    if (data.data.trim() === "") return;
    setTask((prev) => {
      localStorage.setItem("data", JSON.stringify([data, ...prev]));
      return [data, ...prev];
    });
  };

  const deleteHandller = (id) => {
    const fillterdTasks = task.filter((t) => t.id !== id);
    localStorage.setItem("data", JSON.stringify(fillterdTasks));
    setTask(fillterdTasks);
  };

  const done = (id) => {
    task.forEach((t) => {
      if (t.id === id && t.done === false) {
        t.done = true;
        return;
      }
      if (t.id === id && t.done === true) {
        t.done = false;
        return;
      }
    });
    const updatedData = task;
    setTask((prev) => {
      return [...prev];
    });
    localStorage.setItem("data", JSON.stringify(updatedData));
  };

  return (
    <div className="container box">
      <Header></Header>

      <Day></Day>
      <AddTask getTask={getTask}></AddTask>
      <div>
        {task.map((data) => {
          return (
            <Tasks
              deleteHandller={deleteHandller}
              taskID={data.id}
              done={done}
              state={data.done}
              data={data.data}
              key={data.id}
            ></Tasks>
          );
        })}
      </div>
    </div>
  );
}

export default App;
