import { useState } from 'react';

interface TodoFormProps {
  addTodo: (title: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요."
      />
      <button type="submit">등록</button>
    </form>
  );
}

export default TodoForm;
