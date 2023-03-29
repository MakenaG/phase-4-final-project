import React, { useState, useEffect } from 'react';

const UserVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/videos', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>My Videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserVideos;
