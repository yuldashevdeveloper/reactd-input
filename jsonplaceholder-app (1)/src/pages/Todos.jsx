import { useEffect, useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Todos</h2>
      {todos.slice(0, 10).map(todo => (
        <div key={todo.id} style={{ marginBottom: '1rem', border: '1px solid #ddd', padding: '1rem' }}>
          <p>{todo.title} - <strong>{todo.completed ? "Done" : "Pending"}</strong></p>
        </div>
      ))}
    </div>
  );
}