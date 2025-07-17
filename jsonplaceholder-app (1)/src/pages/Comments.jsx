import { useEffect, useState } from 'react';

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Comments</h2>
      {comments.slice(0, 10).map(comment => (
        <div key={comment.id} style={{ marginBottom: '1rem', border: '1px solid #ddd', padding: '1rem' }}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}