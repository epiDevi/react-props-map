import "./ProductsItems.css";
const ProdutsItems = (props) => {
  return (
    <>
      <article>
        <img src={props.item.imgUrl} alt="sss" />
        <h4>{props.item.name}</h4>
        <p>{props.item.price}€</p>
        <button> Buy Now</button>
      </article>
    </>
  );
};

export default ProdutsItems;
