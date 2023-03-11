import React, { useState } from 'react';
import { ReverseButton } from '../../components/ReverseButton';
import { data, secondData } from './_mock_'
import './style.css'
import { Container } from '../../components/Container';
import { NextButton } from '../../components/NextButton';

export const Main = () => {
    const [counter, setConuter] = useState({ "first": 0, "second": 0 })

    const click = (param) => {
        setConuter((prev => {
            const obj = { ...prev }
            obj[param]++
            return { ...obj }
        }))
    }
console.log(counter)

    return (

        <Container
            left={
                <div className='wrapper' >
                    {
                        data.map((item) => {
                            return <div className='button-wrapper' >
                                <ReverseButton click={() => click('first')} {...item} />
                            </div>
                        })

                    }
                    {counter.first > 5 &&
                    <NextButton className={'next-button'}/>
                        // <button className='next-button' >далее</button>

                    }
                </div>


            }
            right={
                <div className='wrapper right-wrapper' >
                    {
                        secondData.map((item) => {
                            return <div className='button-wrapper' >
                                <ReverseButton click={() => click('second')} {...item} />
                            </div>
                        })
                    }
                    {counter.second > 5 &&
                    <NextButton className={'next-button--right'}/>
                        // <button className= >далее</button>
                    }
                </div>
            }
        />
    );
};

