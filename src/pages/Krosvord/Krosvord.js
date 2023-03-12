import React, {useState} from 'react';
import { Container } from '../../components/Container';
import { KrosvordComponent } from '../../components/KrosvordComponent';

import { data, question } from './_mock_'
export const Krosvord = () => {
    const [counter, setConuter]=useState(0)
    console.log(counter)
    return (
        <Container
        left={<KrosvordComponent maxX={8} maxY={5} words={data.left} question={question.left} setCounter={setConuter} counter={counter}/>}
        right={<KrosvordComponent maxX={10} maxY={5} words={data.right} question={question.right} right={true} setCounter={setConuter} counter={counter}
        />}
        buttonText={counter>1 && 'К следующим испытаниям'}
        url='/payment'
    />
    );
};

