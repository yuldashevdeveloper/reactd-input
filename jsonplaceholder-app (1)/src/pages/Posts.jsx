import { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Posts</h2>
      {posts.slice(0, 10).map(post => (
        <div key={post.id} style={{ marginBottom: '1rem', border: '1px solid #ddd', padding: '1rem' }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}