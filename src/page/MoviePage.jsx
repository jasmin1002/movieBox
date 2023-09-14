import Logo from "../components/Logo";
import "./style.css";

function MoviePage() {
  return (
    <main className="movie-page">
      <aside className="aside">
        <Logo orientation={"horizontal"} pl="1rem" pr="1rem" />
        <nav className="navigation">
          <ul className="navigation-items">
            <li className="navigation-link">Home</li>
            <li className="navigation-link navigation-link-selected">Movies</li>
            <li className="navigation-link">Tv Series</li>
            <li className="navigation-link">Upcoming</li>
          </ul>
        </nav>
        <div className="movie-quiz">
          <p className="movie-quiz-cta">
            Play movie quizzes and earn free tickets
          </p>
          <p className="movie-quiz-players">50k people are playing now</p>
          <button className="btn btn-rounded">start playing</button>
        </div>
        <button className="btn btn-flat btn-logout">Logout</button>
      </aside>
      <section className="cinema">
        <div className="cinema-console">
          <img
            src="/trailer-backdrop.png"
            alt="movie trailer"
            className="cinema-trailer"
          />
        </div>
        <div className="cinema-detail">
          <div className="cinema-watch">
            <div className="cinema-watch-overview">
              <h3 className="cinema-watch-title" data-testid="movie-title">
                Top Gun: Maverick
              </h3>
              <span className="separator">•</span>
              <span
                className="cinema-watch-year"
                data-testid="movie-release-date"
              >
                2023
              </span>
              <span className="separator">•</span>
              <span className="cinema-pg-rating">PG-13</span>
              <span className="separator">•</span>
              <span
                className="cinema-watch-duration"
                data-testid="movie-runtime"
              >
                21h 10m
              </span>
              <span className="cinema-watch-genre">Action</span>
              <span className="cinema-watch-genre">Drama</span>
            </div>
            <p
              className="cinema-watch-description"
              data-testid="movie-overview"
            >
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUNs elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
            </p>
            <ul className="cinema-watch-cast">
              <li className="cinema-watch-director">
                <span className="designation-label">Director: </span>
                <span className="designation-value">Joseph Kosinski</span>
              </li>
              <li className="cinema-watch-writers">
                <span className="designation-label">Writers: </span>
                <span className="designation-value">
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </li>
              <li className="cinema-watch-stars">
                <span className="designation-label">Stars: </span>
                <span className="designation-value">
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>
              </li>
            </ul>
            <div className="cinema-watch-RA">
              <div className="cinema-watch-rating">Top rated movie #65</div>
              <div className="cinema-watch-award">Awards 9 nomination</div>
            </div>
          </div>
          <aside className="cinema-other-movies">
            <button className="btn btn-showtime">See showtimes</button>
            <button className="btn btn-watchoption">More watch options</button>
            <div className="cinema-other-banner">
              <img
                src="/banner-advert.png"
                alt="banner advert"
                className="advert-banner"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default MoviePage;
