import React, { useState, useEffect } from 'react';
import TrackList from './TrackList';
import NowPlaying from './NowPlaying';

const Home = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setTracks(data))
      .catch(error => console.error('Error fetching tracks:', error));
  }, [BASE_URL]);

  const handlePlay = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div>
      <TrackList tracks={tracks} onPlay={handlePlay} />
      {currentTrack && <NowPlaying track={currentTrack} />}
    </div>
  );
};

export default Home;