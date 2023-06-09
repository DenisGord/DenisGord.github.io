import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

export const Container = ({ left, right, buttonText, url }) => {
    const nav=useNavigate()
    const onClick=()=>{
        nav(url)
    }
    return (
        <div className='flex-container dont-touch-scroll'>
            {left}

            {right}
            {buttonText &&
                <button onClick={onClick} className='next-button-center' >{buttonText}</button>

            }
        </div>
    );
};

