import React, { Component } from 'react';

import Field from './Field';

export default class Question extends Component {
  render() {
    const { title, fields } = this.props.question;

    return (
      <div>
        <h3>{title}</h3>
        {
          fields.map((field, i) =>
            <Field
              key={i}
              field={field}
              onChange={(a, v) => this.props.onChange(a, v)}
            />)
          }
      </div>
    );
  }
}
