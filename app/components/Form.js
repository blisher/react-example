import React, { Component, PropTypes } from 'react';
import { TextInput, SecondaryTextInput } from './Controls'
import FormRow from './FormRow'

export default class Form extends Component {
    renderForm = (title, fields, index) => {
        return (
            <div key={index}>
                <TextInput title={title} />
                {fields.map(field => {
                    return this.renderFormRow(field);
                })}
            </div>)
    }

    render() {
        return (
            <div>
                <label>{this.props.title}</label>
                {this.props.fields.map((field,index) => {
                    return <FormRow key={index} action={this.props.actions} {...field} />
                })}
            </div>)
    }
}