import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

// eslint-disable-next-line react/prop-types
function Main({ movies }) {
  // eslint-disable-next-line react/prop-types
  console.log(movies);
  return (
    <main className="content w-full lg:px-20 py-12">
      <div className="flex justify-between mb-10 items-center">
        <h2 className="text-2xl font-bold ">Featured Movie</h2>
        <button className="btn btn-flat btn-more">See more &gt;</button>
      </div>
      <MovieList>
        {/* eslint-disable-next-line react/prop-types */}
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </MovieList>
      {/* <section>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section> */}
    </main>
  );
}

export default Main;
