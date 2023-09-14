// eslint-disable-next-line react/prop-types
function Rating({ colour, width }) {
  const style = { colour, width };
  return (
    <section className="rating" style={style}>
      <div className="imdb-rating rating-overview">
        <img src="/imdb-icon.png" alt="imdb icon" />
        <p className="rating-number">
          <span style={style}>86.0 </span> {`${"/ 100"}`}
        </p>
      </div>
      <div className="imdb-rating rating-overview">
        <img src="/tomatoes.png" alt="tomatoes icon" />
        <p className="rating-download">
          <span>86</span>%
        </p>
      </div>
    </section>
  );
}

export default Rating;
