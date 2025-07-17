import { Link } from 'react-router-dom';

const pages = [
  { path: "/posts", label: "100 Posts" },
  { path: "/comments", label: "500 Comments" },
  { path: "/albums", label: "100 Albums" },
  { path: "/photos", label: "5000 Photos" },
  { path: "/todos", label: "200 Todos" },
  { path: "/users", label: "10 Users" },
];

export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1> JSON Data Viewer</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {pages.map((p, i) => (
          <Link key={i} to={p.path} style={{
            padding: '1rem',
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            textDecoration: 'none',
            color: '#333',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}>
            <h3>{p.path}</h3>
            <p>{p.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}