export default function TodoItem({ item }: { item: TodoType }) {
  if (!item) return <p>No todos found</p>;
  return (
    <li key={item.id}>
      <label>
        <input type='checkbox' checked={item.completed} readOnly />
        {item?.title && (
          <span
            style={{
              textDecoration: item.completed ? 'line-through' : 'none',
              marginLeft: '0.5rem',
            }}
          >
            {item.title}
          </span>
        )}
      </label>
    </li>
  );
}
