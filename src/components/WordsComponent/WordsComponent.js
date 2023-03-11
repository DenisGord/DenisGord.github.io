import React, { useState, useEffect, useMemo, useRef } from 'react';
import { DNDCard } from '../DNDCard';
import { nanoid } from 'nanoid';
import './style.css'

export const WordsComponent = ({ data, right = false, setConuter, count }) => {
    const [currentWordNum, setCurrentWordNum] = useState(0)
    const [counter, setCounter] = useState(0)
    const [showButton, setShowButton] = useState(false)
    const [text, setText] = useState(false)

    const ref = useRef()
    const currentWord = data[currentWordNum]


    const renderDndCard = useMemo(() => {
        return currentWord.first.split('').map((item, index) => {
            return <DNDCard block={ref} key={nanoid()} x={(90 * index) + 20} letter={item} id={nanoid()} setConuter={setCounter} />
        })

    }, [currentWordNum, currentWord])


    const renderDropZone = useMemo(() => {
        return currentWord.second.split('').map(item => {
            return <div key={nanoid()} className='drop-zone'>{item}</div>
        })

    }, [currentWordNum])

    useEffect(() => {

        if (counter === currentWord.second.length) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }, [counter])

    const click = () => {
        if (currentWordNum >= data.length - 1) {
            setText(true)
            setConuter((prev) => {
                return prev + 1
            })
        } else {
            setCurrentWordNum(currentWordNum + 1)
        }
        setCounter(0)
        setShowButton(false)
    }
    return (

        <div ref={ref} className={`wrapper wrapper-words ${right ? 'right-wrapper' : ''}`} >
            {count>1 ? 
            <h1>Вы разгадали все слова, готовы двигаться дальше?</h1> :
            !text ?
                <div>
                    <div className='flex-container'>
                        {renderDndCard}

                    </div>
                    <div>
                        <div className='flex-container'>
                            {renderDropZone}

                        </div>

                        <button 
                        disabled={!showButton} 
                        className='next-button-words' style={{ "opacity": showButton ? 1 : 0 }} onClick={click} >Далее</button>


                    </div>
                </div> :
                <h1>Вы разгадали все слова, дождитесь вторую команду</h1>
            }


        </div>
    );
};

