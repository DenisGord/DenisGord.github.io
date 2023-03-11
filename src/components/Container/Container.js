import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

export const Container = ({ left, right, buttonText, url }) => {
    console.log(buttonText)
    const nav=useNavigate()
    const onClick=()=>{
        nav(url)
    }
    return (
        <div className='flex-container'>
            {left}

            {right}
            {buttonText &&
                <button onClick={onClick} className='next-button-center' >{buttonText}</button>

            }
        </div>
    );
};

