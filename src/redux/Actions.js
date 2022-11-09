import { ADD_TO_TODO } from "./Constants"

export const AddToTodo = (todo) => {
	return {
		type: ADD_TO_TODO,
		payload: todo,
	};
};