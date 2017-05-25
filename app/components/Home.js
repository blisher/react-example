import React, { Component } from 'react';
import { Link } from 'react-router';

export default (props) => (
	<div className='wrapper'>
		<h1>React Example App</h1>
		<div>
			<Link to='/recursion'>
				Recursion
			</Link>
		</div>
		<div>
			<Link to='/user_form'>
				User Form
			</Link>
		</div>
	</div>
);
