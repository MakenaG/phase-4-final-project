import React, { useState,useEffect } from 'react';
import './UploadVideo.css';
import { getToken } from '../utils/auth';

const UploadVideo = ({ setVideos }) => {
  const [video, setVideo] = useState(null);
  const [videoLink, setVideoLink] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('')
  const token = getToken()

  const handleVideoChange = (e) => {
    const selectedVideo = e.target.files[0];
    setVideo(selectedVideo);
    setVideoLink(''); 
    console.log(selectedVideo)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (video || videoLink) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);

      if (video) {
        formData.append('video', video);

        fetch('https://backend-dc1w.onrender.com/videos', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setVideo(null);
            setTitle('');
            setDescription('');
            setVideos(prevVideos => [...prevVideos, data]); // Add the new video to the videos array

          })
          .catch((error) => {
            setError(error.errors);
          });
      } else if (videoLink) {
        formData.append('video', videoLink);
        fetch('https://backend-dc1w.onrender.com/videos', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setVideoLink('');
            setTitle('');
            setDescription('');
            setVideos(prevVideos => [...prevVideos, data]); // Add the new video to the videos array

          })
          .catch((error) => {
            setError(error.errors);
          });
        // Handle video link submission
        // Perform necessary logic (e.g., validate link, process video)

        setVideoLink(''); // Clear video link after submission
      }
    } else {
      setError('Please select a video file or provide a video link.');
    }

    // const formData = new FormData();
    // formData.append("video", video);
    // formData.append("title", title);
    // formData.append("description", description);
  
   
    // fetch("https://backend-dc1w.onrender.com/videos", {
    //   method: "POST",
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   },
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //    console.log(data)
    //    setVideo(null);
    //    setTitle('');
    //    setDescription('');
    //   })
    //   .catch((error) => {
    //     setError(error.errors);
    //   });
  };

  return (
    <div className='upload-form'>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
            <label htmlFor="video-link">Provide Link:</label>
            <input
              type="text"
              id="video-link"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
            />
          </div>
        <div>
          <label htmlFor="video">Video:</label>
          <input
            type="file"
            id="video"
            accept="video/*"
            onChange={handleVideoChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}> Upload </button>
      </form>
      {video && (
        <div>
          <video controls>
            <source src={URL.createObjectURL(video)} />
            Your browser does not support HTML5 video.
          </video>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;