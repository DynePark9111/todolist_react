import { todo } from "../Types/types";

export function sortByDate(array: todo[]) {
  return array.sort((a: any, b: any) => a.id - b.id);
}

export function sortByContent(array: todo[]) {
  return array.sort((a: todo, b: todo) => a.content.localeCompare(b.content));
}

export function sortByImportance(array: todo[]) {
  return array.sort((a: any, b: any) => a.important - b.important).reverse();
}

export function sortByCompleted(array: todo[]) {
  return array.sort((a: any, b: any) => a.completed - b.completed).reverse();
}
