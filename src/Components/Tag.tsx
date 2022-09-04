import styles from "../Styles/Components/Tag.module.scss";

type TagProps = {
  text: string;
};

export default function Tag({ text }: TagProps) {
  return <div className={styles.Tag}>{text}</div>;
}
