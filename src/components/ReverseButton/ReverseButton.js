import React, { useState } from 'react';
import './style.css'

export const ReverseButton = ({ text, img, click }) => {

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
                <img src={img} className='flip-box-back' alt='img' />
            </div>
        </button>
    );
};

