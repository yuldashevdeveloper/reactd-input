import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Users</h2>
      {users.map(user => (
        <div key={user.id} style={{ marginBottom: '1rem', border: '1px solid #ddd', padding: '1rem' }}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}