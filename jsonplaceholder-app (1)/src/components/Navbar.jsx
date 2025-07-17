import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#333' }}>
      <Link to="/" style={{ color: '#fff' }}>Home</Link>
      <Link to="/posts" style={{ color: '#fff' }}>Posts</Link>
      <Link to="/comments" style={{ color: '#fff' }}>Comments</Link>
      <Link to="/albums" style={{ color: '#fff' }}>Albums</Link>
      <Link to="/todos" style={{ color: '#fff' }}>Todos</Link>
      <Link to="/users" style={{ color: '#fff' }}>Users</Link>
      <Link to="/login" style={{ color: '#fff' }}>Login</Link>
    </nav>
  );
}