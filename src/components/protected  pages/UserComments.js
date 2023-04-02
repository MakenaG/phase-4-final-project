import React, { useState, useEffect } from 'react';


import { FaUser } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faFilm, faStar } from '@fortawesome/free-solid-svg-icons';
import './UserComments.css';

const UserComments = ({ movieId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/movies/${movieId}/comments`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [movieId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://backend-dc1w.onrender.com/api/movies/${movieId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ content: newComment }),
      });
      const data = await response.json();
      setComments((prevComments) => [...prevComments, data]);
      setNewComment('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-comments">
      <h2>
        <FontAwesomeIcon icon={faFilm} className="icon" />
        Comments
      </h2>
      {comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className='comm-ul'>
          {comments.map((comment) => (
            <li className='comm-list' key={comment.id}>
              <p>{comment.content}</p>
              <p className="username">
                <FaUser className="icon" />
                <em>{comment.user.username}</em>
              </p>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} className="icon" />
                <span>{comment.rating}/5</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newComment">Add Comment:</label>
          <textarea
            id="newComment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserComments;
