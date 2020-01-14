import React from 'react';
import './input.style.css'

const Input = ({name,span,value,disabled,type,onChange,checked, className}) =>{
    return (
        <div className={className}>
            <p>{span}</p>
            <input type={type} value={value} name={name} disabled={disabled ? disabled : null} checked={checked ? checked : null} onChange={onChange} ></input>
        </div>
    )
}

export default Input;