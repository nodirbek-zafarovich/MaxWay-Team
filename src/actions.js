// actions.js
export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item,
});

export const updateTotalPrice = () => ({
  type: 'UPDATE_TOTAL_PRICE',
});

export const removeFromCart = (itemId) => ({
  type: 'REMOVE_FROM_CART',
  payload: itemId,
});
