import { Link } from "react-router-dom";
import { Product } from "../redux/productSlice";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const { category, description, id, image, price, rating, title } = product;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="object-contain">
        <img src={image} alt={title} className="object-contain w-36" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title text-sm">{title}</h2>
        <p className="text-sm">{description.slice(0, 60)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <Link to={`/products/${product.id}`} className="btn btn-secondary">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
