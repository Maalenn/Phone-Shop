import { Link } from "react-router-dom";

const Card = ({ products }) => {
  return (
    <>
      {products.map(({ id, img, title, price }) => (
        <article key={id} className="card">
          <img src={img} alt={title} className="card-img" />
          <h3 className="card-title">{title}</h3>
          <div className="detail">
            <h4 className="card-price">{price}</h4>
            <Link className="btn" to={id.toString()}>
              Details
            </Link>
          </div>
        </article>
      ))}
    </>
  );
};

export default Card;
