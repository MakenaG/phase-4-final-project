import React, { useState, useEffect, useCallback } from 'react';
import { FaUser } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faFilm, faStar } from '@fortawesome/free-solid-svg-icons';
import './UserComments.css';

// Custom hook that fetches and updates comments based on movieId
const useComments = (movieId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch comments from API
  const fetchComments = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('https://backend-dc1w.onrender.com/users/reviews', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      const data = await response.json();
      setComments(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, []);

  // Update comments by posting a new comment to API
  const updateComments = useCallback(async (newComment) => {
    setLoading(true);
    try {
      const response = await fetch('https://backend-dc1w.onrender.com/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
           comment: newComment, 
           movie_id: movieId
          }),
      });
      const data = await response.json();
      setComments((prevComments) => [...prevComments, data]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }, [movieId]);

  // Fetch comments when movieId changes
  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return { comments, loading, error, updateComments };
};

const UserComments = ({ movieId }) => {
  const [newComment, setNewComment] = useState('');
  const { comments, loading, error, updateComments } = useComments(movieId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateComments(newComment);
    setNewComment('');
  };

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="user-comments">
      <h2>
        <FontAwesomeIcon icon={faFilm} className="icon" />
        Comments
      </h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className="comm-ul">
          {comments.map((comment) => (
            <li className="comm-list" key={comment.id}>
              <p>{comment.content}</p>
              <p className="username">
                <FaUser className="icon" />
                {/* {comment.user.user} */}
              </p>
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={handleNewCommentChange}
          placeholder="Write a comment..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserComments;
