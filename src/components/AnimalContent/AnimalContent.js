import React from 'react';
import './style.css'
export const AnimalContent = ({ text, image , step, childred, className}) => {
    return (
        <div className={className}>
            <div className='all-display-block'>
                <p className='text-wrapper'>

                    {text}
                    
                </p>
            </div>


            {/* <div className='all-display-block'>
                
                    <a name={step}></a>
                    {childred}
              
            </div> */}

        </div>
    );
};

