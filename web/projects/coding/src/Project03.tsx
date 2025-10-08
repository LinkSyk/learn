import TodoItemList from "./components/project03/TodoItemList";
import {
  TodoItemStatus,
  TodoItemPriority,
} from "./components/project03/TodoItem";
import { useEffect, useState } from "react";
import { useTodoItemStore } from "./store/project03";
import { type TodoItemData } from "./components/project03/TodoItem";

import { Plus } from "lucide-react";
import Modal from "./components/project03/Modal";

function Project03() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addTodoItem = useTodoItemStore((state: any) => state.addTodoItem);
  const todoItemList: TodoItemData[] = useTodoItemStore(
    (state: any) => state.todoItemList,
  );

  const [allItemCnt, setAllItemCnt] = useState(todoItemList.length);
  const [todoItemCnt, setTodoItemCnt] = useState(
    todoItemList.filter((item) => item.status === TodoItemStatus.Todo).length,
  );
  const [doneItemCnt, setDoneItemCnt] = useState(
    todoItemList.filter((item) => item.status === TodoItemStatus.Done).length,
  );

  useEffect(() => {
    setAllItemCnt(todoItemList.length);
    setTodoItemCnt(
      todoItemList.filter((item) => item.status === TodoItemStatus.Todo).length,
    );
    setDoneItemCnt(
      todoItemList.filter((item) => item.status === TodoItemStatus.Done).length,
    );
  }, [todoItemList]);

  return (
    <div className="h-[100vh] bg-stone-50">
      <div className="pb-4 pt-4 text-center">
        <p className="text-5xl font-bold">待办事项列表</p>
        <p className="mt-1 text-base text-gray-500">
          一个功能完整的待办事项管理应用
        </p>
      </div>
      <div className="grid grid-flow-col grid-cols-4 grid-rows-8 px-20 pt-4">
        <div className="col-span-1 row-span-8">
          <div className="m-4 space-y-2 rounded-xl bg-white px-6 py-4 text-xl text-gray-500 shadow-md">
            {/* 统计信息 */}
            <p className="text-2xl text-black">统计信息</p>
            <div className="flex justify-between">
              <p>总事项数</p>
              <p>{allItemCnt}</p>
            </div>
            <div className="flex justify-between">
              <p>已完成</p>
              <p className="text-green-500">{doneItemCnt}</p>
            </div>
            <div className="flex justify-between">
              <p>待完成</p>
              <p className="text-yellow-500">{todoItemCnt}</p>
            </div>
            {/* <div className="flex justify-between">
              <p>逾期</p>
              <p className="text-red-500">5</p>
            </div> */}
          </div>
          <div className="m-4 space-y-2 rounded-xl bg-white px-6 py-4 text-xl text-gray-500 shadow-md">
            {/* 过滤器 */}
            <p className="text-2xl text-black">过滤器</p>
            <div className="rounded-xs px-2 transition-colors hover:bg-gray-100">
              全部
            </div>
            <div className="rounded-xs px-2 transition-colors hover:bg-gray-100">
              待完成
            </div>
            <div className="rounded-xs px-2 transition-colors hover:bg-gray-100">
              已完成
            </div>
            <div className="rounded-xs px-2 transition-colors hover:bg-gray-100">
              逾期
            </div>
          </div>
          <div className="m-4 space-y-2 rounded-xl bg-white px-6 py-4 text-xl text-gray-500 shadow-md">
            <p className="text-2xl text-black">排序方式</p>
            <div></div>
          </div>
        </div>
        <div className="col-span-3 row-span-1">
          {/* 主题内容 */}
          <div className="shadow-m m-4 space-y-1 rounded-xl bg-white px-6 py-4 text-xl text-gray-500">
            <div className="flex flex-col justify-start gap-2">
              <div className="flex justify-between gap-2">
                <div className="grow">
                  {/* TODO: 为什么demo给出的icon和input的顺序是相反的？*/}
                  <input
                    type="input"
                    placeholder="搜索事项..."
                    className="border-1 rounded-xs h-full w-full border-gray-200"
                  ></input>
                </div>
                <div className="flex flex-row items-center justify-between rounded-md bg-blue-500 px-2 py-1 text-white">
                  <Plus />
                  <button
                    onClick={() => {
                      setIsModalOpen(!isModalOpen);
                      addTodoItem({
                        key: String(todoItemList.length),
                        title: "待办事项" + todoItemList.length,
                        content: "待办事项" + todoItemList.length + "的内容",
                        status: TodoItemStatus.Todo,
                        priority: TodoItemPriority.High,
                      });
                    }}
                    className="w-24"
                  >
                    添加待办
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 row-span-7">
          <div className="shadow-m m-4 space-y-1 rounded-xl bg-white px-6 py-4 text-xl">
            <p className="mb-8 text-2xl">待办事项</p>
            <TodoItemList />
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}

export default Project03;
