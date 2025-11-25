import type { Todo } from '../types/types';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
}

function TodoItem({ todo, toggleComplete }: TodoItemProps) {
  const handleClick = () => {
    toggleComplete(todo.id);
  };

  const itemStyle: React.CSSProperties = {
    textDecoration: todo.completed ? 'line-through' : 'none',
    cursor: 'pointer',
    margin: '5px 0',
  };

  return (
    <li style={itemStyle} onClick={handleClick}>
      {todo.title}
    </li>
  );
}

export default TodoItem;
