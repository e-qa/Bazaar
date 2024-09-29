import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { getProductsById } from "../redux/productSlice";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { productsDetail } = useAppSelector((store) => store.products);

  const {
    category,
    description,
    id: products_id,
    image,
    price,
    rating,
    title,
  } = productsDetail!;

  useEffect(() => {
    dispatch(getProductsById(id as string));
  }, [dispatch, id]);

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex gap-20 text-center">
        <div className="w-[200px] flex justify-center">
          <img src={image} className="bg-cover" alt={title} />
        </div>
        <div className="w-[500px] gap-10 flex flex-col">
          <h3 className="text-2xl ">{title}</h3>
          <b>{price}$</b>
          <p className="text-sm">{description}</p>
          <button className="btn btn-primary capitalize">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
