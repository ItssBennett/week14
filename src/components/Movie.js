import ReviewForm from './ReviewForm';



const Movie = (props) => {
  return (
    <div className="movie-container">
      <h2>{props.title}</h2>
      <ReviewForm />
      <p>{props.synopsis}</p>
    </div>
  );
};

export default Movie;



