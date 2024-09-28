import { useDispatch } from "react-redux";
import { getAllProducts, getProductsByCategory } from "../redux/productSlice";
import { AppDispatch } from "../redux/store";
import { useState } from "react";

const categoriesData = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const dispatch = useDispatch<AppDispatch>();

  const handleButton = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      dispatch(getAllProducts());
      return;
    }
    dispatch(getProductsByCategory(category));
  };

  return (
    <div className="flex items-center justify-center mb-20">
      <div className="join">
        {categoriesData.map((category, index) => (
          <input
            key={index}
            className="join-item btn"
            type="radio"
            checked={category === selectedCategory ? true : false}
            name="options"
            onChange={() => {
              handleButton(category);
            }}
            aria-label={category}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
