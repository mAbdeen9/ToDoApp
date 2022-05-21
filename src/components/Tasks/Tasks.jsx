//
import styles from "./Tasks.module.css";
import { PencilSquare, Trash } from "react-bootstrap-icons";

const Tasks = (props) => {
  const deleteTask = () => {
    props.deleteHandller(props.taskID);
  };

  const clickHandler = () => {
    props.done(props.taskID);
  };

  const editHandler = () => {
    props.updateTaskHandler(props.taskID);
  };

  return (
    <div className={` ${styles.taskDiv}`}>
      <div
        onClick={clickHandler}
        className={`${props.state ? styles.done : ""}`}
      >
        <li> {props.data}</li>
      </div>
      <div>
        <button className={styles.taskBtn}>
          <span>
            <PencilSquare onClick={editHandler} color="#a3acc3" />
          </span>
          <span onClick={deleteTask}>
            <Trash style={{ margin: "0 10px" }} color="#a3acc3" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Tasks;
