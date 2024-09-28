import { Link } from "react-router-dom";
import { Product } from "../redux/productSlice";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const { description, id, image, title } = product;
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={title} className="w-[250px] h-[300px] bg-cover" />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title text-sm">{title}</h2>
        <p className="text-sm">{description.slice(0, 60)}...</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <Link to={`/products/${id}`} className="btn btn-secondary">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
