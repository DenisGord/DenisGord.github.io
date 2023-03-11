import React, {useState} from 'react';
import { Container } from '../../components/Container';
import { WordsComponent } from '../../components/WordsComponent';
import { data } from './_mock_'
export const Words = () => {
    const [counter, setConuter]=useState(0)
   
    return (
        <Container
            left={<WordsComponent data={data.left} setConuter={setConuter} count={counter}/>}
            right={<WordsComponent data={data.right} right={true} setConuter={setConuter} count={counter}
            />}
            buttonText={counter>1 && 'К следующим испытаниям'}

        />
    );
};

