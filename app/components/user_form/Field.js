import React, { Component } from 'react';

export default class MyComponent extends Component {
  _renderField() {
    const { field } = this.props;

    if (field.type === 'dropdown') {
      return <select onChange={(e) => this._onFieldChange(e)}>
        {
          field.options.map((option, i) =>
            <option key={i} value={option}>{option}</option>)
          }
      </select>
    }

    return <input type={field.type} onChange={(e) => this._onFieldChange(e)} />;
  }

  _onFieldChange(e) {
    this.props.onChange(this.props.field.name, e.currentTarget.value);
  }

  render() {
    return (
      <div>
        <h5>{this.props.field.label}</h5>
        {this._renderField()}
      </div>
    );
  }
}
