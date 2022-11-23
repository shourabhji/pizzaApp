import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  {composeWithDevTools} from 'redux-devtools-extension'
import  getAllPizzasReducer  from "./reducers/pizzaReducer";
import userReducer  from "./reducers/userReducer";
import cartItemsReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartItemsReducer: cartItemsReducer,
  userReducer: userReducer,
});

const catrItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const PizzaInitial = {
  cartItemsReducer: {
    items: catrItems || [],
  },
};

const middleware = [thunk]


const store = createStore(rootReducer, PizzaInitial ,composeWithDevTools(applyMiddleware(...middleware)) );

export default store;