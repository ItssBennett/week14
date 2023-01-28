import React, { useState } from 'react';

const Stars = (props) => {
    // useState hook to keep track of the current rating
    const [rating, setRating] = useState(0);

    // handleClick function that sets the rating and calls the handleRating function passed as a prop
    const handleClick = (star) => {
        setRating(star);
        props.handleRating(star);
    }

    return (
        <div className="stars-container">
            {
                // map over an array of numbers from 1 to 5
                [1, 2, 3, 4, 5].map((star, index) => (
                    <span key={index} onClick={() => handleClick(star)}>
                        {/* if the rating is greater than or equal to the current star, render a filled star, otherwise render an empty star */}
                        {rating >= star ? '⭐' : '☆'}
                    </span>
                ))
            }
        </div>
    );
};

export default Stars;



