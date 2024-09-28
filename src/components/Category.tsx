import { useDispatch } from "react-redux";
import { getAllProducts, getProductsByCategory } from "../redux/productSlice";
import { AppDispatch } from "../redux/store";

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Category = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleButton = (category: string) => {
    if (category === "all") {
      dispatch(getAllProducts());
      return;
    }
    dispatch(getProductsByCategory(category));
  };

  return (
    <div className="flex items-center justify-center mb-20">
      <div className="join">
        {categories.map((category, index) => (
          <button
            className="btn join-item"
            key={index}
            onClick={() => handleButton(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
