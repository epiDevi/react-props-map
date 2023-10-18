import Items from "./MoviesItem";
import movies from "../assets/data";
import "./Movie.css";
const Movie = () => {
  return (
    <>
      <section>
        {/* <Items artikel={movies[0]} /> */}
        {movies.map((item, index) => {
          console.log(item);
          return <Items key={index} artikel={item} />;
        })}
      </section>
    </>
  );
};

export default Movie;
