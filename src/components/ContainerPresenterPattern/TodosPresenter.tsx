import { Error } from '../elements';
import TodoItem from './TodoItem';

export default function TodosPresenter({
  todos,
  isLoading,
  isError,
  onRetry,
}: {
  todos: TodoType[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
}) {
  if (isLoading) return <p>Loading todos...</p>;

  if (isError)
    return (
      <Error message='Error loading todos.' ctaText='Retry' onRetry={onRetry} />
    );

  if (todos.length === 0) {
    return <p>No todos found.</p>;
  }

  return (
    <ul>
      {todos?.map((todo) => (
        <TodoItem item={todo} />
      ))}
    </ul>
  );
}
