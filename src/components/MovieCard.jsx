import Rating from "./Rating";

// eslint-disable-next-line react/prop-types
function MovieCard({ poster_path, title }) {
  // eslint-disable-next-line no-undef
  // console.log(props);
  return (
    <div className="movie  outline-2 outline-teal-500">
      <div className="movie-top poster">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="poster movie"
          className="movie-poster"
        />
      </div>
      <div className="movie-details">
        <p className="movie-overview">
          <span className="movie-lang">USA</span>
          {", "}
          <span className="movie-year">2023</span>
        </p>
        <h4 className="movie-title text-xl my-3">{title}</h4>
        <Rating />
        <p className="movie-genre">Action, Drama, Horror</p>
      </div>
    </div>
  );
}

export default MovieCard;
