const Category = () => {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="flex items-center justify-center mb-20">
      <div className="join">
        {categories.map((category, index) => (
          <button className="btn join-item" key={index}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
