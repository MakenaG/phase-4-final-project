import React, { useState } from 'react';
import './UploadVideo.css';

const UploadVideo = ({ setVideos }) => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', video);
    formData.append('title', title);
    formData.append('description', description);

    try {
      setIsUploading(true);
      const response = await fetch('https://backend-dc1w.onrender.com/videos', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        }
      });
      const data = await response.json();
      console.log(data);
      // Reset form fields after successful upload
      setVideo(null);
      setTitle('');
      setDescription('');
  
      // Fetch new video list
      const videoResponse = await fetch('', {
        headers: {
          'Authorization': `Bearer ${localStorage?.getItem('token')}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const videoData = await videoResponse.json();
      if (videoData) {
        setVideos(videoData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className='upload-form'>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit} >
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
          <label htmlFor="video">Video:</label>
          <input
            type="file"
            id="video"
            onChange={(e) => setVideo(e.target.files[0])}
            accept="video/*"
            required
          />
        </div>
        <button type="submit" disabled={isUploading}>
          {isUploading ? `Uploading...${uploadProgress}%` : 'Upload'}
        </button>
      </form>
    </div>
  );
};

export default UploadVideo;