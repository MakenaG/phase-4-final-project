import React, { useState, useEffect } from 'react';
import './UserVideos.css';
import UploadVideo from './UploadVideo';
import { getToken } from '../utils/auth';

const UserVideos = () => {
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState([]);
  const [description, setDescription] = useState('');
   let token = getToken()
  // Define a common function to fetch videos
  // const fetchVideos = async () => {
  //   try {
  //     const response = await fetch('https://backend-dc1w.onrender.com/videos', {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('token')}`,
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     const data = await response.json();
  //     setVideos(data || []);
  //   } catch (error) {
  //     setErrors(error);
  //   }
  // };

     useEffect(() => {
      // Fetch films data and update state
      fetch("https://backend-dc1w.onrender.com/videos",{
        headers: {
            Authorization: `Bearer ${token}`
          }
      })
        .then((res) => {
          if(res.ok){
            res.json().then((data)=>{
              setVideos(data)
            })
          }else{
            res.json().then((err)=>setErrors([err.errors]))
          }
        })
    },[setVideos, setErrors,token])

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
        setDescription('')
        // fetchVideos('https://backend-dc1w.onrender.com/videos');
      }
    } catch (error) {
      console.error(error);
    }
  };
// console.log(videos)
  // Render the videos list and upload component
  return (
    <div className="videos-container">
      <h2 className="vid-head"> My Videos</h2>
      <UploadVideo setVideos={setVideos} />
      <ul className="vid-li">
        {videos.map((video) => (
          <li className="vid-list" key={video.id}>
            <div className="vid-item">
              {/* <video
                src={video.video}
                title={video.title}
                description={video.description}
              ></video> */}
              <iframe
              src={video.video}
              title={video.title}
              description={video.description}
              autoPlay
              muted
              loop
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h4>Description</h4>
              <p>{video.description}</p>
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
