import { ADD_TO_TODO } from "./Constants";

const initialState = { todo: [] };

const TodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_TODO:
			return { todo: [...state.todo, action.payload] }
		default:
			return state;
	};
};

export default TodoReducer;