import styles from "../Styles/Home.module.scss";
import TodoList from "../Components/TodoList";
import InputForm from "../Components/InputForm";
import ImageBy from "../Components/ImageBy";

export default function Home() {
  return (
    <div className={styles.Home}>
      <InputForm />
      <TodoList />
      {/* <Tag text="completed" /> */}
      {/* <TodoList /> */}
      <ImageBy />
    </div>
  );
}
