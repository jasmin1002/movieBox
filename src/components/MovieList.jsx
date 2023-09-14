// eslint-disable-next-line react/prop-types
function MovieList({ children }) {
  return (
    <section className="movie-list grid grid-cols-4  gap-x-16 gap-y-16">
      {children}
    </section>
  );
}

export default MovieList;
