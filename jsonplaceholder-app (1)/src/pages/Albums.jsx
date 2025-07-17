import { useEffect, useState } from 'react';

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => setAlbums(data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Albums</h2>
      {albums.slice(0, 10).map(album => (
        <div key={album.id} style={{ marginBottom: '1rem', border: '1px solid #ddd', padding: '1rem' }}>
          <h4>{album.title}</h4>
        </div>
      ))}
    </div>
  );
}