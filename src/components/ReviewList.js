const Review = (props) => {
    return (
      <div className="review-container">
        <h4>{props.username}</h4>
        <h5>{props.movie.Title}</h5>
        <p>{props.text}</p>
      </div>
    );
  };
  export default Review