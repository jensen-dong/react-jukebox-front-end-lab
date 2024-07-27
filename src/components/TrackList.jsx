import React from 'react';
import { Link } from 'react-router-dom';

const TrackList = ({ tracks, onPlay }) => {
  const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

  const handleDelete = (id) => {
    fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
      setTracks(tracks.filter(track => track._id !== id));
    })
    .catch(error => console.error('Error deleting track:', error));
  };

  return (
    <div>
      {tracks.map(track => (
        <div key={track._id}>
          <h3>{track.title}</h3>
          <p>{track.artist}</p>
          <button onClick={() => onPlay(track)}>Play</button>
          <Link to={`/edit-track/${track._id}`}>Edit</Link>
          <button onClick={() => handleDelete(track._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TrackList;