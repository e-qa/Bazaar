import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/productSlice";
import { AppDispatch } from "../redux/store";
import { useAppSelector } from "../utils/hooks";

const Home = () => {
  const { products } = useAppSelector((state) => state.products);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(products);

  return (
    <div>
      {products.map((product) => (
        <div>
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
