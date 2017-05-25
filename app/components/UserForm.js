import React, { Component } from 'react';
import { Link } from 'react-router';

import formConfig from '../lib/formConfig';

export default class UserForm extends Component {
  state = {};

  _logFormState() {
    // ...
  }

  // define methods here if necessary

  render() {
    return (
      <div className='wrapper'>
        <h1>User Form</h1>
        <div><Link to='/'>Home</Link></div>

        {/* questions go here */}

        <button onClick={() => this._logFormState()} style={{ marginTop: 30 }}>
          Log into browser console
        </button>
      </div>
    );
  }
}
