import React from 'react';
import './style.css'
export const FlipCard = ({ img, text, state, click }) => {


    return (
        <button onClick={() => { click() }}

            className='flip-box flip-box-new' >
            <div
                style={{
                    "transform": state ? 'rotateY(180deg)' : ''
                }}
                className='flip-box-inner' >
                <div className='flip-box-front' >
                    <img src={img} alt='img' className='flip-box-back-image image-new' />

                </div>
                <div className='flip-box-back'>
                    <h2 > {state ? text : '?'}</h2>
                    {state &&
                        <h3>Нажмите на карточку чтобы продолжить</h3>

                    }

                </div>
            </div>
        </button>
    );
};
