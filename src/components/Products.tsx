import { useDispatch } from "react-redux";
import { useAppSelector } from "../utils/hooks";
import { AppDispatch } from "../redux/store";
import { useEffect } from "react";
import { getAllProducts } from "../redux/productSlice";
import ProductItem from "./ProductItem";

const Products = () => {
  const { products } = useAppSelector((state) => state.products);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-y-20 gap-x-20 ">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
