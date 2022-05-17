//
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
//

const myNavElements = [
  { id: 1, isActive: false, text: "Day" },
  { id: 2, isActive: false, text: "Week" },
  { id: 3, isActive: false, text: "Month" },
  { id: 4, isActive: false, text: "Year" },
];

const Header = () => {
  const [data, setData] = useState(myNavElements);

  useEffect(() => {
    setData([
      { id: 1, isActive: true, text: "Day" },
      { id: 2, isActive: false, text: "Week" },
      { id: 3, isActive: false, text: "Month" },
      { id: 4, isActive: false, text: "Year" },
    ]);
  }, []);

  const activeElemntClass = (id) => {
    setData(
      [
        { id: 1, isActive: false, text: "Day" },
        { id: 2, isActive: false, text: "Week" },
        { id: 3, isActive: false, text: "Month" },
        { id: 4, isActive: false, text: "Year" },
      ].map((data) => {
        if (data.id === id) {
          data.isActive = true;
        }
        return data;
      })
    );
  };

  return (
    <header className={styles.topNav}>
      {data.map((e) => {
        return (
          <div
            key={e.id}
            onClick={() => {
              activeElemntClass(e.id);
            }}
            className={e.isActive ? styles.active : ""}
          >
            {e.text}
          </div>
        );
      })}
    </header>
  );
};

export default Header;
