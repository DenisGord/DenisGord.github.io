import React from 'react';
import { Container } from '../../components/Container';
import { PaymentComponent } from '../../components/PaymentComponent';

export const Payment = () => {
    return (
        <Container 
        left={<PaymentComponent/>}
        right={<PaymentComponent right={true}/>}
        />
    );
};

