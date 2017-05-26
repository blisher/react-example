import React, { Component } from 'react';

export default class RecursiveComponent extends Component {

  renderRecursive = (components) => {
    let CurrentComponent = components.shift();
    if(CurrentComponent == undefined){
      return null;
    }
    return <CurrentComponent>{this.renderRecursive(components)}</CurrentComponent>
  }
  render() {
    return (
      <div>
        {this.renderRecursive(this.props.components)}
      </div>
    );
  }
};