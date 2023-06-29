import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faTrash, faEdit, faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import './reviews.css'
import { getToken } from "./utils/auth";

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [addReviewMode, setAddReviewMode] = useState(false);
  const [newReview, setNewReview] = useState({ comment: "", movie_id: movieId });
  const [editMode, setEditMode] = useState({});
  const [editedComments, setEditedComments] = useState({});
  const token = getToken()

  useEffect(() => {
    // const reviewsFromLocalStorage = JSON.parse(localStorage.getItem("reviews"));
    // if (reviewsFromLocalStorage) {
    //   const filteredReviews = reviewsFromLocalStorage.filter((review) => review.movie_id === movieId);
    //   setReviews(filteredReviews);
    //   setLoading(false);
    // } else {
    fetch(`https://backend-dc1w.onrender.com/reviews`,{
      headers: {
        // "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const filteredReviews = data.filter((review) => review.movie_id === movieId);
        setReviews(filteredReviews);
        localStorage.setItem("reviews", JSON.stringify(filteredReviews)); // save reviews to local storage
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
    // }
  }, [movieId,token]);

  const handleAddReview = () => {
    fetch("https://backend-dc1w.onrender.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        comment: newReview.comment,
        movie_id: movieId
    }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews([...reviews, data]);
        setNewReview({ comment: "", movie_id: movieId });
        setAddReviewMode(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleEdit = (id) => {
    setEditMode({ ...editMode, [id]: true });
    setEditedComments({ ...editedComments, [id]: reviews.find((review) => review.id === id).comment });
  };

  const handleSaveEdit = (id) => {
    fetch(`https://backend-dc1w.onrender.com/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ comment: editedComments[id] }),
    })
      .then(() => {
        setReviews(
          reviews.map((review) => {
            if (review.id === id) {
              return { ...review, comment: editedComments[id] };
            }
            return review;
          })
        );
        setEditMode({ ...editMode, [id]: false });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleDelete = (id) => {
    fetch(`https://backend-dc1w.onrender.com/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
    })
      .then(() => {
        setReviews(reviews.filter((review) => review.id !== id));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  if (error) {
    return <div>Error loading reviews: {error}</div>;
  }
  return (
    <div className="reviews-container">
    {reviews.map((review) => (
      <div key={review.id} className="review">
        <div className="user">
          <FontAwesomeIcon icon={faUser} />
          {review.user ? <h4>{review.user.username}</h4> : null}
          {console.log(review.user) ? <h4>{console.log(review.user.username)}</h4> : null}
        </div>
        {editMode[review.id] ? (
          <>
            <textarea
              className="comment-input"
              value={editedComments[review.id]}
              onChange={(e) =>
                setEditedComments({
                  ...editedComments,
                  [review.id]: e.target.value,
                })
              }
            />
            <div className="edit-buttons">
              <button
                className="save-button outline-dark"
                onClick={() => handleSaveEdit(review.id)}
              >
                <FontAwesomeIcon icon={faSave} />
              </button>
              <button
                className="cancel-button outline-dark"
                onClick={() =>
                  setEditMode({ ...editMode, [review.id]: false })
                }
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="comment">{review.comment}</p>
            <div className="review-buttons">
              <button
                className="edit-button outline-dark"
                onClick={() => handleEdit(review.id)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                className="delete-button outline-dark"
                onClick={() => handleDelete(review.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </>
        )}
      </div>
    ))}
    {!addReviewMode && (
      <button className="add-review-button outline-dark" onClick={() => setAddReviewMode(true)}>
        Add Review
      </button>
    )}
    {addReviewMode && (
      <div className="add-review">
        <textarea
          className="comment-input"
          value={newReview.comment}
          onChange={(e) =>
            setNewReview({ ...newReview, comment: e.target.value })
          }
        />
        <div className="add-review-buttons">
          <button className="save-button" onClick={handleAddReview}>
            <FontAwesomeIcon icon={faSave} />
          </button>
          <button
            className="cancel-button outline-dark"
            onClick={() => setAddReviewMode(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    )}
  </div>
  );
}

export default Reviews;