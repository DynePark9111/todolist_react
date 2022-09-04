import styles from "../Styles/Components/PickTheme.module.scss";
import { useContext } from "react";
import { themeColors } from "../Data/data";
import { themeContext } from "../Contexts/themeContext";

export default function PickTheme() {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div className={styles.PickTheme}>
      <h5>Pick a theme</h5>
      <ul>
        {themeColors.map((color, index) => {
          return (
            <li
              key={color}
              id={theme === index ? styles.selected : ""}
              onClick={() => setTheme(index)}
            >
              <div
                className={styles.dot}
                id={theme === index ? styles.active : ""}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
