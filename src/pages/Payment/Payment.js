import React, {useState} from 'react';
import { Container } from '../../components/Container';
import { PaymentComponent } from '../../components/PaymentComponent';
import {data, img} from './_mock_'
export const Payment = () => {
    const [counter, setCounter]=useState(0)
    return (
        <Container 
        left={<PaymentComponent count={counter} setCount={setCounter} img={img.left} data={data.left}/>}
        right={<PaymentComponent count={counter} setCount={setCounter} img={img.right} data={data.right} right={true}/>}
        />
    );
};

