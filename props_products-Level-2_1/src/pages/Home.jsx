import Items from "../cpmponents/ProductsItems";
import "./Home.css";
const Home = () => {
  const pruductsArr = [
    { imgUrl: "/1.jpeg", name: "cocooli", price: "30" },
    { imgUrl: "/3.avif", name: "Kamera", price: "60" },
    { imgUrl: "/3.webp", name: "Bamboo Shampoo", price: "15.40" },
  ];
  return (
    <>
      <section>
        <Items item={pruductsArr[0]} />
        <Items item={pruductsArr[1]} />
        <Items item={pruductsArr[2]} />
      </section>
    </>
  );
};

export default Home;
