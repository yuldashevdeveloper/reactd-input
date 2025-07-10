import { useState } from 'react';

const UserForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    if (!name || !age || !profession) return;

    onAdd({ name, age, profession });

    setName('');
    setAge('');
    setProfession('');
  };

  return (
    <form onSubmit={Submit} className="user-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Profession"
        value={profession}
        onChange={e => setProfession(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;