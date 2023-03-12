import React from 'react';
import { Container } from '../../components/Container';
import { PaymentComponent } from '../../components/PaymentComponent';
import {data} from './_mock_'
export const Payment = () => {
    return (
        <Container 
        left={<PaymentComponent data={data.left}/>}
        right={<PaymentComponent data={data.right} right={true}/>}
        />
    );
};

