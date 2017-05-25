import React, { Component } from 'react';

export default class RecursiveComponent extends React.Component {
  _recursive() {
    const { components } = this.props;
    const Element = components.shift();

    if (!Element) {
      return null;
    }

    return <Element>{this._recursive(components)}</Element>
  }

  render() {
    return (
      <div>
        {this._recursive(this.props.components)}
      </div>
    );
  }
};
