import React, { useState, useEffect } from 'react';
import './UserVideos.css';
import UploadVideo from './UploadVideo';
import UserComments from './UserComments';

const UserVideos = () => {
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState([]);
  const [description, setDescription] = useState('');

  // Define a common function to fetch videos
  const fetchVideos = async (url) => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setVideos(data || []);
    } catch (error) {
      setErrors(error);
    }
  };

  // Fetch all videos on initial render
  useEffect(() => {
    fetchVideos('https://backend-dc1w.onrender.com/videos');
  }, []);

  // Fetch user videos when videos state changes
  useEffect(() => {
    fetchVideos('https://backend-dc1w.onrender.com/videos');
  }, [videos]);

  // Delete a video by id
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://backend-dc1w.onrender.com/videos/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setVideos(videos.filter((video) => video.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Update a video by id
  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`https://backend-dc1w.onrender.com/videos/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description })
      });

      if (response.ok) {
        fetchVideos('https://backend-dc1w.onrender.com/videos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Render the videos list and upload component
  return (
    <div className="videos-container">
      <h2 className="vid-head"> My Videos</h2>
      <UploadVideo setVideos={setVideos} />
      <ul className="vid-li">
        {videos.map((video) => (
          <li className="vid-list" key={video.id}>
            <div className="vid-item">
              <iframe
                src={`https://www.youtube.com/embed/Nv2ZM6zE3zw`}
                title={video.title}
                description={video.description}
              ></iframe>
              
              <div className="vid-info">
                <h4>
                  <input
                    type="text"
                    value={description}
                    defaultValue={video.description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </h4>
                <p>{video.owner}</p>
                <button className='video-button' onClick={() => handleDelete(video.id)}>Delete</button>
                <button className='video-button' onClick={() => handleUpdate(video.id)}>Update</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserVideos;
