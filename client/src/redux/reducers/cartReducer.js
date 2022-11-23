const CartItemInitial = [];

const cartItemsReducer = (state = { items: CartItemInitial }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
     
  //  returns undefined if  dosent match
      const checkItemAlreadyExist = state.items.find((item)=> item._id === action.payload._id );

      if (checkItemAlreadyExist) {
        return {
          ...state,
         items : state.items.map(item => item._id === action.payload._id ? action.payload : item)

        }
      } else {
           return {
             ...state,
             items: [...state.items, action.payload],
           };
      }
      
   
      case "REMOVE_FROM_CART":
          return {
            ...state,
        items: [...state.items].filter((element)=> {return element !== action.payload} )
          };
    default:
      return state;
    }
   
};

export default cartItemsReducer;
