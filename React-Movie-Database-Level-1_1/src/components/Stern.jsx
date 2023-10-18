const Stern = (props) => {
  let sternAnzahl = Math.round(props.item);
  let stern = "";
  console.log(sternAnzahl);

  for (let i = 0; i < sternAnzahl; i++) {
    stern += "★";
  }
  for (let i = 0; i < 10 - sternAnzahl; i++) {
    stern += "☆";
  }
  return (
    <>
      <p className="stern">{stern}</p>
    </>
  );
};

export default Stern;
