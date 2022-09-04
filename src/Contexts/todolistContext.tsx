import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { URL } from "../Data/data";
import { todo } from "../Types/types";

export type childrenProps = {
  children: ReactNode;
};

export type todolistContextType = {
  todolist: Array<todo>;
  setTodolist: (arg: Array<todo>) => void;
};

export const todolistContext = createContext({} as todolistContextType);

export const TodolistContextProvider = ({ children }: childrenProps) => {
  useEffect(() => {
    getTodos();
  }, []);

  const [todolist, setTodolist] = useState<todo[]>([]);

  async function getTodos() {
    try {
      const { data } = await axios.get(URL);
      setTodolist(data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <todolistContext.Provider value={{ todolist, setTodolist }}>
      {children}
    </todolistContext.Provider>
  );
};
