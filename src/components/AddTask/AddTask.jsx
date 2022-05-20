//
import { useRef } from "react";
import styles from "./AddTask.module.css";

//

const AddTask = (props) => {
  const inputRef = useRef();
  const sendTask = (e) => {
    e.preventDefault();
    const task = {
      id: Math.random(),
      data: inputRef.current.value,
      done: false,
    };
    props.getTask(task);
    inputRef.current.value = "";
  };

  return (
    <form>
      <input
        ref={inputRef}
        placeholder=" Add A Task . . . ✏️"
        className={styles.taskInput}
      />
      <button onClick={sendTask} className={styles.AddTaskBtn}>
        ADD
      </button>
    </form>
  );
};

export default AddTask;
