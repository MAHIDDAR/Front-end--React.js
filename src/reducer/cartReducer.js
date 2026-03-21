const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((_, i) => i !== action.index),
      };
    default:
      return state;
  }
};
export default cartReducer;