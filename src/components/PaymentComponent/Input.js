import React, { useState, useEffect } from 'react';

const Input = ({ num, setCounter }) => {
    const [value, setValue] = useState('')
    useEffect(()=>{
        if(num===+value){
            setCounter((prev)=>prev+1)
        }
    },[value])
    return (
    <input onChange={(e) => setValue(e.target.value)} 
    value={value} 
    type='number'
     style={{ "color": num===+value ? 'gold' : 'white'}} 
     disabled={num===+value}
     placeholder='Введите число' className='table-input' 
     />
    );
};

export default Input;