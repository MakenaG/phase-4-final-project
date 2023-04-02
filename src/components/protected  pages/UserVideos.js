import React, { useState, useEffect } from 'react';
import './UserVideos.css';
import UploadVideo from './UploadVideo' 

const UserVideos = () => {
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend-dc1w.onrender.com/videos', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setVideos([data] || []);
      } catch (error) {
        setErrors(error);
      }
    };
    fetchData();
  }, []);
  console.log(videos)

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://backend-dc1w.onrender.com/videos/${id}`, {
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
      <h2 className='vid-head'> My Videos</h2>
      <UploadVideo />
      
      <ul className='vid-li'>
        {videos.map((video) => (
          <li className='vid-list' key={video.id}>
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
            </div>
            <div className="video-details">
              <h3>{video.title}</h3>
              <p className="video-username">{video.user}</p>
              <p className="video-description">{video.description}</p>
              <button onClick={() => handleDelete(video.id)}>Delete</button>
              {errors.length > 0 && (
                    <div className="text-danger mt-3">
                      {errors.map((error, index) => (
                        <p key={index}>{error}</p>
                      ))}
                    </div>
                  )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserVideos;
