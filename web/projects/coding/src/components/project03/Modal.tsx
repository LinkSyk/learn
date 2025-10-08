interface ModelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal(props: ModelProps) {
  return (
    <div
      className={`fixed inset-0 bg-black/50 ${props.isOpen ? "" : "hidden"} flex items-center justify-center`}
    >
      <div className="mx-4 w-full max-w-md space-y-4 rounded-lg bg-white shadow-xl">
        <div className="border-b p-6">
          <h3 className="text-lg font-semibold">添加待办事项</h3>
        </div>
        <div className="space-y-4 p-6">
          <div className="flex flex-col">
            <p className="mb-2 text-sm font-medium">标题</p>
            <input
              type="text"
              className="border-1 rounded-md border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-sm font-medium">描述</p>
            <textarea
              name="content"
              className="border-1 min-h-[80px] rounded-md border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-1 flex-col">
              <p>优先级</p>
              <input
                type="text"
                className="border-1 w-full border-gray-200 px-4 py-2"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <p>截止日期</p>
              <input
                type="text"
                className="border-1 w-full border-gray-200 px-4 py-2"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-3 p-4">
          <button
            className="border-1 rounded-md border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
            onClick={props.onClose}
          >
            取消
          </button>
          <button className="border-1 rounded-md border-blue-500 bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
            确定
          </button>
        </div>
      </div>
    </div>
  );
}
