import styles from "../Styles/Components/ImageBy.module.scss";

export default function ImageBy() {
  return (
    <div className={styles.ImageBy}>
      <span>background image by</span>
      <a href="https://unsplash.com/">Unsplash Developers</a>
    </div>
  );
}
