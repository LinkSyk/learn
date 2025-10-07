import { create } from "zustand";

import {
  type TodoItemData,
  TodoItemStatus,
} from "../components/project03/TodoItem";

interface TodoStoreState {
  todoItemList: TodoItemData[];
  setTodoItemList: (list: TodoItemData[]) => void;
  addTodoItem: (item: TodoItemData) => void;
  updateTodoStatus: (id: number, status: TodoItemStatus) => void;
  getTodoItemById: (id: number) => TodoItemData | undefined;
  deleteTodoItem: (id: number) => void;
}

export const useTodoItemStore = create<TodoStoreState>((set, get) => ({
  todoItemList: [],
  setTodoItemList: (list: TodoItemData[]) => set({ todoItemList: list }),
  addTodoItem: (item: TodoItemData) => {
    set((state) => ({
      todoItemList: [...state.todoItemList, item],
    }));
  },
  updateTodoStatus: (id: number, status: TodoItemStatus) =>
    set((state) => ({
      todoItemList: state.todoItemList.map((item, idx) =>
        idx === id ? { ...item, status } : item,
      ),
    })),
  getTodoItemById: (id: number): TodoItemData | undefined => {
    const state = get();
    return state.todoItemList[id];
  },
  deleteTodoItem: (id: number) =>
    set((state) => ({
      todoItemList: state.todoItemList.filter((_, idx) => idx !== id),
    })),
}));
