import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animation from "../animation/moviewheel.json";

function Loader() {
  const animationRef = useRef("undefined");

  useEffect(function () {
    Lottie.loadAnimation({
      container: animationRef.current,
      animationData: animation,
      renderer: "svg",
      name: "MovieBox",
    });
  }, []);

  return (
    <section className="loader animationWindow">
      <div ref={animationRef} className="moviewheel"></div>
      <h2 className="app-title">MovieBox</h2>
    </section>
  );
}

export default Loader;
