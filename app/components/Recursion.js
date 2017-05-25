import React, { Component } from 'react';
import { Link } from 'react-router';

import RecursiveComponent from './recursion/RecursiveComponent';

const One = (props) => (
	<div className='box'>One{props.children}</div>
);

const Two = (props) => (
	<div className='box'>Two{props.children}</div>
);

const Three = (props) => (
	<div className='box'>Three{props.children}</div>
);

// assign components below
const components = [One, Two, Three];

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
