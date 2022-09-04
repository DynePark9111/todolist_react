import { ReactNode } from "react";
import styles from "../Styles/Components/Button.module.scss";

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <div className={styles.Button}>{children}</div>;
}
