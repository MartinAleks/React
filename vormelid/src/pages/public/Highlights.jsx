import React, { useState } from 'react';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Highlights.css';
import highlights from '../../data/highlights.json';

function Highlights() {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {highlights.map((video) => (
          <div key={video.id} className="col-lg-4 mb-5">
            <div className="card highlight-card">
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe title={video.title} src={video.videoUrl} className="embed-responsive-item" allowFullScreen />
                </div>
                <p className="card-text mt-3">
                  {expanded ? video.description : <>{video.shortDescription}</>}
                  {' '}
                  {video.description.length > video.shortDescription.length && (
                    <button className="btn btn-link" onClick={toggleExpanded}>
                      {expanded ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
