//

import styles from "./Day.module.css";
//
const utcStr = new Date().toUTCString();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date(utcStr);
const dayName = days[d.getDay()];

const Day = (props) => {
  return (
    <div className={styles.dayBox}>
      <div>{dayName}</div>
      <div className={styles.date}>
        {utcStr.split(" ")[2]} {utcStr.split(" ")[1]} , {utcStr.split(" ")[3]}
      </div>
    </div>
  );
};

export default Day;
