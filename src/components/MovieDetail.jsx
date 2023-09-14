import Rating from "./Rating";

function MovieDetail() {
  return (
    <div className="movie-description w-1/4 mt-20">
      <h1
        className="movie-description-title text-5xl mb-5"
        data-testid="movie-title"
      >
        John Wick 3: Parabellum
      </h1>
      <Rating colour="white" width="200px" />
      <p className="text-sm my-3 font-light">
        John Wick is on the run after killing a member of the international
        assassin&apos;s guard, with a $14 million price tag on his head. He is
        the target of hitmen and women everywhere.
      </p>

      <button className="movie-description-btn flex items-center justify-center py-3 px-4 text-sm rounded-md uppercase">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
            fill="white"
          />
        </svg>
        <span className="ml-2">watch trailer</span>
      </button>
    </div>
  );
}

export default MovieDetail;
