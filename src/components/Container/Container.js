import React from 'react';
import './style.css'

export const Container = ({ left, right }) => {
    return (
        <div className='flex-container'>
                {left}
            
                {right}
        </div>
    );
};

