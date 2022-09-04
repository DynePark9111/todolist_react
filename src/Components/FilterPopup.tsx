import styles from "../Styles/Components/FilterPopup.module.scss";
import {
  FaArrowDown,
  FaCheck,
  FaExchangeAlt,
  FaRegCalendarAlt,
  FaRegStar,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { todolistContext } from "../Contexts/todolistContext";
import {
  sortByCompleted,
  sortByContent,
  sortByDate,
  sortByImportance,
} from "../utils/sort";

export default function FilterPopup() {
  const { todolist, setTodolist } = useContext(todolistContext);
  const [isAscending, setIsAscending] = useState(false);

  const onClickImportance = () => {
    setTodolist(sortByImportance([...todolist]));
  };
  const onClickCompleted = () => {
    setTodolist(sortByCompleted([...todolist]));
  };
  const onClickContent = () => {
    setTodolist(sortByContent([...todolist]));
  };
  const onClickDate = () => {
    setTodolist(sortByDate([...todolist]));
  };

  return (
    <div className={styles.FilterPopup}>
      <div
        className={styles.title}
        onClick={() => {
          setIsAscending((pre) => !pre);
          setTodolist([...todolist].reverse());
        }}
      >
        <FaArrowDown
          className={styles.arrow}
          id={isAscending ? styles.ascending : ""}
        />
        <h5>정렬 기준</h5>
      </div>
      <hr />
      <ul>
        <li onClick={onClickDate}>
          <FaRegCalendarAlt />
          <span>기본(날짜)</span>
        </li>
        <li onClick={onClickImportance}>
          <FaRegStar />
          <span>중요도</span>
        </li>
        <li onClick={onClickCompleted}>
          <FaCheck />
          <span>완료</span>
        </li>
        <li onClick={onClickContent}>
          <FaExchangeAlt className={styles.arrows} />
          <span>내용</span>
        </li>
      </ul>
    </div>
  );
}
