import React, {useState} from 'react';
import { Container } from '../../components/Container';
import { RebusContainer } from '../../components/RebusContainer';
import {data} from './_mock_'
export const Rebus = () => {
  const [counter, setCounter]=useState(0)
    return (
      <Container
      left={<RebusContainer data={data.left} counter={counter} setConuter={setCounter}/>}
      right={<RebusContainer data={data.right} right={true} counter={counter} setConuter={setCounter}/>}
      buttonText={counter>1 && 'К следующим испытаниям'}
            url='/krosvord'
      />
    );
};

