import Card from "../components/Card";
import { data } from "../data/data.js";
const Home = () => {
  return (
    <section>
      <h2 className="product-heading">All Products</h2>
      <div className="card-container">
        <Card products={data} />
      </div>
    </section>
  );
};

export default Home;
