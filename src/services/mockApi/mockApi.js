const mockIngredients = [
  { id: 1, name: "test" },
  { id: 2, name: "test2" },
];

const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockIngredients);
    }, 1000);
  });
};

export default fetchProducts;
