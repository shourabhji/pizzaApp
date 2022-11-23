export const addToCart = (pizza, quantity = 1, varient) => (dispatch, getState) => {
  var item = {
    name: pizza.name,
    _id: pizza._id,
    varient: pizza.varient,
    varientvalue: varient,
    prices: pizza.prices,
    category: pizza.category,
    image: pizza.image,
    descreption: pizza.descreption,
    quantity: quantity,
  };
  dispatch({ type: "ADD_TO_CART", payload: item });
  const items = getState().cartItemsReducer.items;
  localStorage.setItem('cartItems', JSON.stringify(items));
}
export const removeFromCart = (item) => (dispatch , getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: item });
  const items = getState().cartItemsReducer.items;
  localStorage.setItem("cartItems", JSON.stringify(items));
   
};