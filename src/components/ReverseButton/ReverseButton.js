import React, { useState } from 'react';
import './style.css'

export const ReverseButton = ({ text, img, click, role }) => {

    const [state, setState] = useState(false)
    return (
        <button onClick={() => { setState(true); click() }}

            className='flip-box' >
            <div
                style={{
                    "transform": state ? 'rotateY(180deg)' : ''
                }}
                className='flip-box-inner' >
                <div className='flip-box-front' >
                    {text}
                </div>
                <div className='flip-box-back'>
                    <h2 >{role}</h2>
                <img src={img}  alt='img' className='flip-box-back-image' />

                </div>
            </div>
        </button>
    );
};

