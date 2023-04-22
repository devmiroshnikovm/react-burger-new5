export const logBunsMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Dispatching:", action);

  const selectedIngredients =
    store.getState().selectedItems.selectedIngredients;

  const hasBuns = selectedIngredients.some(
    (ingredient) => ingredient.type === "bun"
  );

  if (hasBuns) {
    console.log("Bun found in selected ingredients");
  }

  const result = next(action);

  return result;
};
