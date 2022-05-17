//
import { useRef } from "react";
import styles from "./AddTask.module.css";
//

const AddTask = (props) => {
  const inputRef = useRef();
  const sendTask = () => {
    props.getTask(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <input
        ref={inputRef}
        placeholder=" Add A Task . . . ✏️"
        className={styles.taskInput}
      />
      <button onClick={sendTask} className={styles.AddTaskBtn}>
        ADD
      </button>
    </div>
  );
};

export default AddTask;
