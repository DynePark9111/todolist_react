import styles from "../Styles/Components/TodoList.module.scss";
import {
  FaRegCircle,
  FaCheck,
  FaRegTrashAlt,
  FaRegStar,
  FaStar,
  FaCircle,
} from "react-icons/fa";
import axios from "axios";
import { todo } from "../Types/types";
import { useContext } from "react";
import { todolistContext } from "../Contexts/todolistContext";
import { timePassed } from "../utils/date";
import { URL } from "../Data/data";

export default function TodoList() {
  const { todolist } = useContext(todolistContext);
  return (
    <div className={styles.TodoList}>
      {todolist.map((todo, index) => {
        return <Todo key={todo.id} index={index} todo={todo} />;
      })}
    </div>
  );
}

type TodoProps = {
  index: number;
  todo: todo;
};

function Todo({ todo, index }: TodoProps) {
  const { todolist, setTodolist } = useContext(todolistContext);
  async function completeTodo() {
    try {
      const { data } = await axios.put(`${URL}/complete/${todo.id}`);
      let copy = [...todolist];
      copy[index] = data;
      setTodolist(copy);
    } catch (error) {
      console.error(error);
    }
  }

  async function importantTodo() {
    try {
      const { data } = await axios.put(`${URL}/important/${todo.id}`);
      let copy = [...todolist];
      copy[index] = data;
      setTodolist(copy);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTodo() {
    try {
      await axios.delete(`${URL}/${todo.id}`);
      setTodolist(todolist.filter((i) => i.id !== todo.id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.Todo}>
      <div className={styles.circleAndCheck} title="완료">
        {todo.completed ? <FaCircle /> : <FaRegCircle />}
        <FaCheck
          className={styles.check}
          id={todo.completed ? styles.completed : ""}
          onClick={completeTodo}
        />
      </div>
      <div
        className={styles.star}
        onClick={importantTodo}
        title={todo.important ? "중요 제거" : "중요"}
        id={todo.important ? styles.important : ""}
      >
        {todo.important ? <FaStar /> : <FaRegStar />}
      </div>
      <div className={styles.data}>
        <div className={styles.content} title={todo.content}>
          {todo.content}
        </div>
        <div className={styles.meta}>
          {/* <div className={styles.author}>{todo.author}</div> */}
          <div className={styles.created}>{timePassed(todo.createdDate)}</div>
        </div>
      </div>
      <div className={styles.delete} title="삭제" onClick={deleteTodo}>
        <FaRegTrashAlt />
      </div>
    </div>
  );
}
