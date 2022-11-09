import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddToTodo } from '../redux/Actions';
import './InputTodo.css';

const InputTodo = () => {
	const [todo, setTodo] = useState('');

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setTodo(e.target.value);
	}
	// console.log(todo);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(AddToTodo(todo));
	}

	return (
		<div>
			<input type="text" onChange={handleChange} placeholder='Type here ...' />
			<button onClick={handleSubmit}>ADD</button>
		</div>
	);
};

export default InputTodo;