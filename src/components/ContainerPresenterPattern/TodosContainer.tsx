import { useEffect, useState } from 'react';

import TodosPresenter from './TodosPresenter';
import { todosApiUrl } from '../../constants';

export default function TodosContainer() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(todosApiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <TodosPresenter
        todos={todos}
        isLoading={isLoading}
        isError={isError}
        onRetry={fetchTodos}
      />
    </div>
  );
}
