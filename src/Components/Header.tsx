import styles from "../Styles/Components/Header.module.scss";
import { FaEllipsisH, FaExchangeAlt } from "react-icons/fa";
import Button from "./Button";
import PickTheme from "./PickTheme";
import { useState } from "react";
import FilterPopup from "./FilterPopup";
import { date } from "../utils/date";

export default function Header() {
  const [showTheme, setShowTheme] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className={styles.Header}>
      <div className={styles.text}>
        <h1 className={styles.title}>My Todolist</h1>
        <div className={styles.day}>{date}</div>
      </div>
      <div className={styles.buttons}>
        <div
          className={styles.lightbulb}
          title="Filter"
          onClick={() => {
            setShowFilter((pre) => !pre);
            setShowTheme(false);
          }}
        >
          <Button
            children={<FaExchangeAlt style={{ transform: "rotate(90deg)" }} />}
          />
        </div>
        <div
          className={styles.ellipsis}
          title="Theme"
          onClick={() => {
            setShowTheme((pre) => !pre);
            setShowFilter(false);
          }}
        >
          <Button children={<FaEllipsisH />} />
        </div>
        {showFilter && <FilterPopup />}
        {showTheme && <PickTheme />}
      </div>
    </div>
  );
}
