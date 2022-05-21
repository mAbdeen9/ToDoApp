//
import classes from "./EditTask.module.css";
import Modal from "./../PopMessage/Modal";
import { useEffect, useRef } from "react";

const EditTask = (props) => {
  const inputValue = useRef();
  useEffect(() => {
    inputValue.current.value = props.popModalData[0];
  });

  const inputHandlerEditer = (e) => {
    props.sendBackNewDataHandler(
      inputValue.current.value,
      props.popModalData[1]
    );
  };

  return (
    <Modal>
      <div className={classes.flexBox}>
        <input type="text" className={classes.taskDiv} ref={inputValue} />
        <button onClick={inputHandlerEditer} className={classes.btnEditTask}>
          Done
        </button>
      </div>
    </Modal>
  );
};

export default EditTask;
