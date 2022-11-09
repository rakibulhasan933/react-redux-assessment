import React from 'react';

const Todo = ({ td, index }) => {
	return (
		<li>{index + 1}. {td} </li>
	);
};

export default Todo;