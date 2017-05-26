import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import formConfig from '../lib/formConfig';
import Form from './Form';

export default class UserForm extends Component {
  state = {

  };

  actions = {
    changeInputValue: (key, value) => {
      this.setState((prevState, props) => {
        return { [key]: value }
      })
    }
  }

  _logFormState() {
    const selectors = [];
    formConfig.questions.forEach((question) => {
      question.fields.forEach((field) => {
        selectors.push(field.name);
      })
    })
    console.log(selectors);
    let tmp = '';
    selectors.forEach((selector) => {
      tmp = `${selector}: ${this.state[selector]}`
      console.log(tmp)
    })

    var result = this.state
  }

  // define methods here if necessary
  render() {
    return (
      <div className='wrapper'>
        <h1>User Form</h1>
        <div><Link to='/'>Home</Link></div>
        {formConfig.questions.map((item, index) => {
          return <Form key={index} {...item} actions={this.actions} />
        })}

        <button onClick={() => this._logFormState()} style={{ marginTop: 30 }}>
          Log into browser console
        </button>
      </div>
    );
  }
}
