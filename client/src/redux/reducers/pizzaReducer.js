
const PizzaInitial = [];

 const getAllPizzasReducer =  (
   state = { pizzas: PizzaInitial },
   action
 ) => {
   switch (action.type) {
     case "GET_PIZZAS_REQUEST":
       return {
         ...state,
         loading: true
       };
     case "GET_PIZZA_SUCCESS":
       return {
         pizzas: action.payload,
         loading: false
       };
     case "GET_PIZZA_FAIL":
       return {
         error: action.payload,
         loading: false
       };

     default:
       return state;
   }
 };

export default getAllPizzasReducer;