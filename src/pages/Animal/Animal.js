import React from 'react';
import { AnimalContent } from '../../components/AnimalContent';
import { Container } from '../../components/Container';
import { Krosvord } from '../../components/Krosvord';
import { data } from './_mocl_'
export const Animal = () => {
    return (
        <>
            {/* <h1>Добро пожаловать в путешествие</h1> */}
            <Container
                left={<AnimalContent text={data.text} step={"first"} className={"wrapper"} childred={<Krosvord className='wrapper' />}/>}
                right={<AnimalContent text={data.secondText} step={"second"} className={"wrapper right-wrapper"} childred={<Krosvord className={"wrapper right-wrapper"}  />} 
                
                />}
                buttonText="Вперёд к испытаниям"
                url='/words'
            />
            
        </>

    );
};

