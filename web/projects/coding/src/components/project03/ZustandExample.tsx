import React from 'react';
import { useTodoItemStore } from '../../store/project03';
import type { TodoItemData } from './TodoItem';

export const ZustandExample: React.FC = () => {
  // 获取store中的方法和数据
  const { 
    todoItemList, 
    addTodoItem, 
    getTodoItemById, 
    updateTodoStatus, 
    deleteTodoItem 
  } = useTodoItemStore();

  // 示例：获取特定id的item
  const getSpecificItem = (id: number) => {
    const item = getTodoItemById(id);
    if (item) {
      console.log('找到的item:', item);
      return item;
    } else {
      console.log('未找到id为', id, '的item');
      return null;
    }
  };

  // 示例：使用useMemo优化获取特定item
  const specificItem = React.useMemo(() => {
    return getTodoItemById(1); // 假设要获取id为1的item
  }, [todoItemList]);

  return (
    <div>
      <h2>Zustand使用示例</h2>
      
      <div>
        <h3>获取特定item示例</h3>
        {specificItem ? (
          <div>
            <p>ID: {specificItem.id}</p>
            <p>标题: {specificItem.title}</p>
            <p>状态: {specificItem.status}</p>
          </div>
        ) : (
          <p>未找到指定item</p>
        )}
      </div>

      <div>
        <h3>所有item列表</h3>
        {todoItemList.map((item: TodoItemData) => (
          <div key={item.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
            <span>{item.title} - {item.status}</span>
            <button 
              onClick={() => getSpecificItem(item.id)}
              style={{ marginLeft: '10px' }}
            >
              查看详情
            </button>
            <button 
              onClick={() => updateTodoStatus(item.id, item.status === 'todo' ? 'done' : 'todo')}
              style={{ marginLeft: '10px' }}
            >
              切换状态
            </button>
            <button 
              onClick={() => deleteTodoItem(item.id)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              删除
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={() => addTodoItem({
          id: Date.now(),
          title: `新任务 ${Date.now()}`,
          content: '任务描述',
          status: 'todo' as const,
          priority: 'medium' as const
        })}
      >
        添加新任务
      </button>
    </div>
  );
};

// 更高级的用法：自定义Hook来获取特定item
export const useSpecificTodoItem = (id: number) => {
  const getTodoItemById = useTodoItemStore(state => state.getTodoItemById);
  
  return React.useMemo(() => {
    return getTodoItemById(id);
  }, [id, getTodoItemById]);
};

// 使用示例
export const SpecificItemComponent: React.FC<{ itemId: number }> = ({ itemId }) => {
  const item = useSpecificTodoItem(itemId);
  
  if (!item) return <div>未找到item</div>;
  
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <p>状态: {item.status}</p>
      <p>优先级: {item.priority}</p>
    </div>
  );
};