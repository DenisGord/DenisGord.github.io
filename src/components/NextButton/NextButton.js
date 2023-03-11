import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
export const NextButton = ({ className }) => {
    const navigation=useNavigate()
   const click=()=>{
    navigation('/animal')
   }
    return (
        <button onClick={click} className={`${className} arrow-7`}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

