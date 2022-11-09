import { createStore } from "redux";
import TodoReducer from "./redux/TodoReducer";


const store = createStore(TodoReducer);

export default store;