// cartReducer.js
const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = {
        ...action.payload,
        quantity: action.payload.quantity || 1, // Default quantity to 1 if not provided
      };
      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
        totalPrice: state.totalPrice + (newItem.productPrice * newItem.quantity),
      };
    case 'UPDATE_TOTAL_PRICE':
      const updatedTotalPrice = state.cartItems.reduce((total, item) => total + (item.productPrice * item.quantity), 0);
      return {
        ...state,
        totalPrice: updatedTotalPrice,
      };
    case 'REMOVE_FROM_CART':
      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload);
      return {
        ...state,
        cartItems: updatedCartItems,
        totalPrice: updatedCartItems.reduce((total, item) => total + (item.productPrice * item.quantity), 0),
      };
    default:
      return state;
  }
};

export default cartReducer;
