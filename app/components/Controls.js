import React, { Component, PropTypes } from 'react';

export const TextInput = (props) => {
    return (
        <form>
            <label>
                {props.title}
                <input onChange={props.action.changeInputValue} type="text" />
            </label>
        </form>)
}
TextInput.propTypes = {
    title: PropTypes.string.isRequired
}

export const SecondaryTextInput = (props) => {
    return (
        <form>
            <label>
                {props.label}
                <input type="text" onChange={(event) => props.action.changeInputValue(props.name,event.currentTarget.value)} name={props.name}/>
            </label>
        </form>
    )
}

SecondaryTextInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export const DropDown = (props) =>{
    return (
        <select name={props.name} onChange={(event) => props.action.changeInputValue(props.name,event.currentTarget.value)}>
            {props.options.map((option,index) => {
                return <option key={index} value={option}>{option}</option>
            } )}
        </select>
    )
}