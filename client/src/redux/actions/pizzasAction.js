import axios from "axios";
const server = "http://localhost:5001/";

export const getAllPizzas = () => async (dispatch) => {
    try {
            dispatch({ type: "GET_PIZZAS_REQUEST" });
        const res = await axios.get( server+"api/pizzas/getAllPizzas");
        dispatch({
            type: "GET_PIZZA_SUCCESS",
            payload: res.data
        });
      } catch (error) {
            dispatch({ type: "GET_PIZZAS_FAIL", payload: error });
      }
}