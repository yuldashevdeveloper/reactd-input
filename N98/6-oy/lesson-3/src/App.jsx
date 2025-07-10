import { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserCard from './components/UserCard/USerCard';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers(prev => [...prev, { ...user, id: Date.now() }]);
  };

  return (
    <div className="app">
      <h1>Users</h1>
      <UserForm onAdd={addUser} />

      <div className="cards">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
