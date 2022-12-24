const initState = {
  numOfItem: 0,
  cart: [],
};

const cartReducer = (state = initState, action) => {
  console.log("cartReducer called");
  console.log(state);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        numOfItem: state.numOfItem + 1,
        cart: [...state.cart, action.payload],
      };
    case "DELETE_ALL":
      return {
        numOfItem: 0,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
