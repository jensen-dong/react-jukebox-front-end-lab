import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TrackForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const { trackId } = useParams();
  const navigate = useNavigate();

  const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

  useEffect(() => {
    if (trackId) {
      fetch(`${BASE_URL}/${trackId}`)
        .then(response => response.json())
        .then(data => {
          setTitle(data.title);
          setArtist(data.artist);
        })
        .catch(error => console.error('Error fetching track:', error));
    }
  }, [trackId, BASE_URL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = trackId ? 'PUT' : 'POST';
    const url = trackId ? `${BASE_URL}/${trackId}` : BASE_URL;

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, artist })
    })
    .then(response => response.json())
    .then(() => {
      navigate('/');
    })
    .catch(error => console.error('Error saving track:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Artist</label>
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default TrackForm;