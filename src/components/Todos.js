import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const Todos = () => {
	const todos = useSelector((state) => state.todo);
	return (
		<div>
			<ul>
				{
					todos?.map((td, index) => <Todo td={td} index={index} key={index} />)
				}
			</ul>
		</div>
	);
};

export default Todos;