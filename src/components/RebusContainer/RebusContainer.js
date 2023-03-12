import React, { useState, useEffect } from 'react';
import { FlipCard } from '../FlipCard';

import './style.css'
export const RebusContainer = ({ data, right, setConuter, counter }) => {
    const [currentNum, setCurrentNum] = useState(0)
    const [value, setValue] = useState('');
    const [showButton, setShowButton] = useState(false)
    const currentRebus = data[currentNum]
    const [text, setText] = useState(false)

    // const click=()=>{
    //     if(value.toLowerCase()===currentRebus.answer.toLowerCase()){
    //         console.log("верно")
    //     }
    // }
    useEffect(() => {
        if (value.toLowerCase() === currentRebus.answer.toLowerCase()) {
            setShowButton(true)
            
        }
    }, [value])

    const onClick = () => {
        if (currentNum >= data.length - 1) {
            setText(true)
            setConuter((prev) => {
                return prev + 1
            })
        } else {
            setCurrentNum(currentNum + 1)
            setShowButton(false)
            setValue('')
        }
    }
    return (
        <div className={`wrapper wrapper-words ${right ? 'right-wrapper' : ''}`} >
            {counter > 1 ?
                <h1>Вы разгадали все слова, готовы двигаться дальше?</h1> :
                !text ? <div className='flex-container flex-container-column'>
                    {/* <img className='image' src={currentRebus.img} alt='img' /> */}
                    <FlipCard
                        img={currentRebus.img}
                        text={currentRebus.answer}
                        state={showButton}
                        click={onClick} />

                    <input value={value} onChange={(e) => setValue(e.target.value)} className='input' type="text" placeholder="Кто зашифрован в ребусе?" />

                </div> :
                    <h1>Вы разгадали все ребусы, дождитесь вторую команду</h1>
            }

        </div>
    );
};

