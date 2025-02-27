import { useState, useEffect } from "react";
import { getReview, createReview, updateReview, deleteReview } from "../API.jsx";


function ReviewsForm() {
  const [reviews, setReviews] = useState([]); // Store multiple reviews
  const [review, setReview] = useState({
    name: "",
    rating: "",
    body: "",
  });
  const [editingId, setEditingId] = useState(null); // Track the review being edited

  // Fetch reviews when component loads
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const response = await getReview();
    setReviews(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Update review if editing
      await updateReview(editingId, review);
      setEditingId(null);
    } else {
      // Create new review
      await createReview(review);
    }

    setReview({ name: "", rating: "", body: "" }); // Clear form
    fetchReviews(); // Refresh reviews
  };

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleEdit = (review) => {
    setReview(review);
    setEditingId(review._id); // Set review ID being edited
  };

  const handleDelete = async (id) => {
    await deleteReview(id);
    fetchReviews();
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>

        <br />

        <input
          name="name"
          type="text"
          placeholder="Enter Name"
          value={review.name}
          onChange={handleChange}
          required
        />

        <br />

        <label htmlFor="Rating">Rating</label>

        <br />

        <select name="rating" value={review.rating} onChange={handleChange} required>
          <option value="">Select Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <br />

        <label htmlFor="Body">Review</label>

        <br />

        <textarea
          name="body"
          cols="30"
          rows="5"
          placeholder="Enter Review Here"
          value={review.body}
          onChange={handleChange}
          required
        ></textarea>

        <br />

        <button type="submit">{editingId ? "Update Review" : "Submit Review"}</button>
      </form>

      <br />

      <h2>Reviews</h2>
      <ul>
        {reviews.map((rev) => (
          <li key={rev._id}>
            <strong>{rev.name}</strong> ({rev.rating}/5): {rev.body}
            <button onClick={() => handleEdit(rev)}>Edit</button>
            <button onClick={() => handleDelete(rev._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewsForm;
