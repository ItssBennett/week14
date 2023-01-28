import React, { useState } from 'react';
import Stars from './Stars';

const ReviewForm = (props) => {
    // State for the name input field
    const [name, setName] = useState('');
    // State for the review textarea
    const [review, setReview] = useState('');
    // State for the array of reviews
    const [reviews, setReviews] = useState([]);
    // State for the star rating
    const [starRating, setStarRating] = useState(0);

    // Event handler for the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add the new review to the array of reviews
        setReviews([...reviews, {name: name, review: review, starRating: starRating}]);
        // Clear the input fields
        setName('');
        setReview('');
        setStarRating(0);
    }

    // Event handler for the rating click
    const handleRating = (star) => {
        setStarRating(star);
    }

    return (
        <div className="review-form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
                <textarea placeholder="Enter your review" value={review} onChange={(e) => setReview(e.target.value)}/>
                <Stars handleRating={handleRating} rating={starRating} />
                <button type="submit">Submit</button>
            </form>
            <div className="reviews-container">
                {reviews.map((r, index) => (
                    <div key={index}>
                        <h4>{r.name}</h4>
                        <p>{r.review}</p>
                        <p>{r.starRating}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewForm;
