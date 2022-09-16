import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productreducer";

const reducers = combineReducers({
  allproducts: productReducer,
  product: selectedProductReducer,
});

export default reducers;
