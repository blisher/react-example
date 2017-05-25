import React, { Component } from 'react';
import { Link } from 'react-router';

import RecursiveComponent from './recursion/RecursiveComponent';

// write components here
// const One and so on...

// assign components below
const components = [];

export default class App extends React.Component {
	render() {
  	return (
    	<div className='wrapper'>
        <h1>Recursion</h1>
				<div><Link to='/'>Home</Link></div>
        <RecursiveComponent components={components} />
      </div>
    );
  }
};
