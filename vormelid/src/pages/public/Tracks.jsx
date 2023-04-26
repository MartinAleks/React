import { useState } from 'react';
import tracksData from '../../data/tracks.json';
import '../../index.css';

const Tracks = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const handleTrackClick = (track) => {
    if (selectedTrack === track) {
      setSelectedTrack(null);
    } else {
      setSelectedTrack(track);
    }
  };

  return (
    <div>
      <h1 className='title'>Click on a track to show image</h1>
      <div className="tracks-list">
        {tracksData.map((track) => (
          <div key={track.id} onClick={() => handleTrackClick(track)} className="track-item">
            <h3 className="track-name">{track.name}</h3>
            <p className="track-location">Location: {track.venue}</p>
            <p className="track-date">Date: {track.date}</p>
            {selectedTrack === track && <img src={track.picture} alt={track.name} className="track-image"/>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
