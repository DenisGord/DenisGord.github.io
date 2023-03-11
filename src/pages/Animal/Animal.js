import React from 'react';
import { AnimalContent } from '../../components/AnimalContent';
import { Container } from '../../components/Container';
import { Rebus } from '../../components/Rebus';
import { data } from './_mocl_'
export const Animal = () => {
    return (
        <>
            {/* <h1>Добро пожаловать в путешествие</h1> */}
            <Container
                left={<AnimalContent {...data} step={"first"} className={"wrapper"} childred={<Rebus className='wrapper' />}/>}
                right={<AnimalContent {...data} step={"second"} className={"wrapper right-wrapper"} childred={<Rebus className={"wrapper right-wrapper"}  />} />}
            />
        </>

    );
};

