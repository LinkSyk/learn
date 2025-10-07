import TodoItem from "./TodoItem";
import type { TodoItemData } from "./TodoItem";
import { useTodoItemStore } from "../../store/project03";

interface TodoItemListProps {}

export default function TodoItemList(props: TodoItemListProps) {
  const todoItemList: TodoItemData[] = useTodoItemStore(
    (state: any) => state.todoItemList,
  );

  return (
    <div>
      {todoItemList.map((_, idx) => (
        <TodoItem id={idx} />
      ))}
    </div>
  );
}
