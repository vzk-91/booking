import React from 'react';
import './select.style.css'

const Select = ({data,name,className,onChange,title,id, ...rest})=>{
    return(
       <div className={className}>
            <label htmlFor={name}>{title}</label>
           <select className='select' name={name} onChange={onChange} {...rest}>
            <option value=""  />
           {data.map((e)=>{
           return <option key={e.id} value={e[id]}>{e[id]}</option>
           })}
       </select>
       </div>
       
    )
}


export default Select;