import { useState, useRef, useEffect } from "react";
// import { arrayGenerator } from "./utils/main";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";

// import data from "/data.json";

// console.log(data);

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(evt) {
    setQuery(evt.target.value);
    console.log(evt.target.value);
  }

  // const url = data;
  // const url =
  //   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  // const token =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjEyZGU4Mzk4NTAyMTU3N2Y2MjM4MGFiMDk3ZGZkMyIsInN1YiI6IjY0ZmU0NTNjZmZjOWRlMGVlMjA4MTlkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r7ROsMusmuh7xirZqug_fVh4uFCDlijDs0kSLfdFHoc";

  // {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     accept: "application/json",
  //   },
  // }

  const header = useRef(undefined);
  const navbar = useRef(undefined);

  useEffect(function () {
    // console.log(header.current);
    const headerObserverOptions = {
      rootMargin: "-50% 0px 0px 0px",
      threshold: 1,
    };

    const headerObserver = new IntersectionObserver(function (
      entries
      // headerObserver
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          navbar.current?.classList.add("position");
        } else {
          navbar.current?.classList.remove("position");
          console.log("Hello there");
        }
      });
    }, headerObserverOptions);

    headerObserver.observe(header.current);
  }, []);

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const response = await fetch("./data/data.json");

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        setMovies(data.results.slice(0, 10));

        setTimeout(function () {
          setIsLoading(false);
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="app h-screen">
      {isLoading ? <Loader /> : ""}

      {!isLoading ? (
        <Header
          header={header}
          navbar={navbar}
          query={query}
          onChange={handleChange}
        />
      ) : (
        ""
      )}
      {!isLoading ? <Main movies={movies} /> : ""}
      {!isLoading ? <Footer /> : ""}
    </div>
  );
}

export default App;
