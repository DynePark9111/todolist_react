import styles from "../Styles/Components/InputForm.module.scss";
import { FaPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import axios from "axios";
import { todolistContext } from "../Contexts/todolistContext";
import { URL } from "../Data/data";

export default function InputForm() {
  const [input, setInput] = useState("");
  const { todolist, setTodolist } = useContext(todolistContext);

  async function postTodos(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${URL}`, { content: input });
      setInput("");
      setTodolist([...todolist, data]);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form className={styles.InputForm} onSubmit={postTodos}>
      <button type="submit" disabled={!input}>
        <FaPlus className={styles.plus} />
      </button>
      <input
        type="text"
        placeholder="작업 추가"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}
