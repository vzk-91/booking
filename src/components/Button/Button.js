import React from 'react';
import './button.style.css'

const Button = ({name,myClassName,onClick}) =>{
    return(
            <button className={myClassName} onClick={onClick}>{name} </button>
    )
}

export default Button;