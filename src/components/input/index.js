import React from 'react';
import "./index.css"
const Input = ({
    label = '',
    name='',
    type='text',
    className='',
    isRequired= false,
    placeholder =''
})=>{
    return(
         <div className="input">
            <label for={name} className="label">{label}</label>
            <input type={type} id={name} className="ioclass" placeholder={placeholder} required={isRequired}/>

         </div>
    )
    }

     
export default Input;