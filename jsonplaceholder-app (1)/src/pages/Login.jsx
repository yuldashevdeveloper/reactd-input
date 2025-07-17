export default function Login() {
  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      <form style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" style={{ padding: '0.5rem' }} />
        <input type="password" placeholder="Password" style={{ padding: '0.5rem' }} />
        <button type="submit" style={{ padding: '0.5rem', background: '#333', color: '#fff' }}>Login</button>
      </form>
    </div>
  );
}