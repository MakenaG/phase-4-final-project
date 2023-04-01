import React, { useState, useEffect } from 'react';
import './UserVideos.css';
import UploadVideo from './UploadVideo' 

const UserVideos = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (data) {
          setVideos(data);
        }
      } catch (error) {
        console.error(error);
        setError('');
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`'${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (response.ok) {
        setVideos(videos.filter((video) => video.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="videos-container">
      <h2>My Videos</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
            </div>
            <div className="video-details">
              <h3>{video.title}</h3>
              <p className="video-username">{video.user.username}</p>
              <p className="video-description">{video.description}</p>
              <button onClick={() => handleDelete(video.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserVideos;
