import React, { Component } from 'react';
import { Link } from 'react-router';

import Question from './user_form/Question';
import formConfig from '../lib/formConfig'

export default class UserForm extends Component {
  state = {};

  _logFormState() {
    const { questions } = formConfig;
    const fieldNames = [];
    questions.forEach(question => question.fields.forEach(field => fieldNames.push(field.name)));
    const result = fieldNames.map((fieldName) =>
      `${fieldName}: \"${this.state[fieldName]}\"`
    ).join("\n");
    console.info(result);
  }

  _changeFieldValue(attr, value) {
    this.setState({ [attr]: value });
  }

  render() {
    const { questions } = formConfig;

    return (
      <div className='wrapper'>
        <h1>User Form</h1>
        {
          questions.map((question, i) =>
            <Question
              key={i}
              question={question}
              onChange={(a, v) => this._changeFieldValue(a, v)}
            />
          )
        }
        <button onClick={() => this._logFormState()} style={{ marginTop: 30 }}>
          Log into browser console
        </button>
      </div>
    );
  }
}
