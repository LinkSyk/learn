import { useTodoItemStore } from "../../store/project03";
import { CircleCheck, Circle } from "lucide-react";
import { useState } from "react";

export interface TodoItemProps {
  //   data: TodoItemData;
  id: number;
  //   onStatusChange: (id: number, status: TodoItemStatus) => void;
}

export enum TodoItemStatus {
  Todo = "todo",
  Done = "done",
}

export enum TodoItemPriority {
  High = "high",
  Medium = "medium",
  Low = "low",
}

export interface TodoItemData {
  title: string;
  content: string;
  status: TodoItemStatus;
  priority: TodoItemPriority;
}

export default function TodoItem(props: TodoItemProps) {
  const todoItem: TodoItemData = useTodoItemStore((state: any) =>
    state.getTodoItemById(props.id),
  );
  const [isDone, setDone] = useState(false);
  const updateTodoStatus = useTodoItemStore(
    (state: any) => state.updateTodoStatus,
  );

  return (
    <div className="space-xl flex items-start justify-between border-t-[0.5px] border-gray-400 py-4">
      {/* <CircleCheck className="text-green-500" /> */}
      <div className="flex flex-1 items-start space-x-3">
        <button
          className="mt-1 rounded-full p-1 transition-colors hover:bg-gray-200"
          onClick={() => {
            setDone(!isDone);
            updateTodoStatus(
              props.id,
              !isDone ? TodoItemStatus.Done : TodoItemStatus.Todo,
            );
          }}
        >
          {isDone ? (
            <CircleCheck className="h-5 w-5 p-0 text-green-500" />
          ) : (
            <Circle className="h-5 w-5 p-0 text-gray-300" />
          )}
        </button>
        <div className="flex flex-col">
          <p className="text-xl">{todoItem.title}</p>
          <p className="text-xs text-gray-500">{todoItem.content}</p>
        </div>
      </div>
    </div>
  );
}
