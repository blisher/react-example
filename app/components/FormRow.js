import React, { Component, PropTypes } from 'react';
import { TextInput, SecondaryTextInput,DropDown } from './Controls'

export default class FormRow extends Component {
    render() {
        let content;
        if (this.props.type == 'text') {
            return <SecondaryTextInput action={this.props.action} name={this.props.name} label={this.props.label} />
        }else if(this.props.type== 'dropdown')
            return <DropDown action={this.props.action} options={this.props.options} name={this.props.name}/>
        return null;
    }
}