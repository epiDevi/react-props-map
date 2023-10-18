import "./MoviesItem.css";
import Stern from "./Stern";
const Items = (props) => {
  return (
    <>
      <div>
        <h3>{props.artikel.title}</h3>
        <p>{props.artikel.year}</p>
        <p>{props.artikel.director}</p>
        <p>{props.artikel.duration}</p>
        <div>
          {props.artikel.genre.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <Stern item={props.artikel.rate} />
      </div>
    </>
  );
};

export default Items;
