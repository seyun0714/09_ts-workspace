import { useEffect, useState } from 'react';
import { type Todo } from './types/types';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
      .then((response) => response.json())
      .then((data: Todo[]) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      completed: false,
      userId: 1,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
