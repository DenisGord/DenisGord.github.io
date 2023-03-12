import React, { useMemo, useState, useEffect } from 'react';
import Input from './Input';
import './style.css'
export const PaymentComponent = ({ count, setCount, right, data, img }) => {
    const [counter, setCounter]=useState(0)
    const [text, setText]=useState(false)
    
    useEffect(()=>{
        if(counter===5){
            setText(true)
            setCount(count+1)
        }
    },[counter])

    const renderTable = useMemo(() => {
        return <table className='table'>
            <tr className='tr'>
                <th><h2>Наименование</h2></th>
                <th><h2>Цена</h2></th>
                <th><h2>Колличество</h2></th>
                <th><h2>Стоимость</h2></th>
            </tr>
            {data.map(item => {
                return <tr className='tr'>
                    {item.map(items => {
                        if (typeof items === 'string') {

                            return items === 'Итого' ? <th className='tr'><h3>{items}</h3></th> : <td className='tr'><h3>{items}</h3></td>
                        }
                        return <td className='tr'>
                          <Input setCounter={setCounter} num={items}/>
                        </td>
                    })}
                </tr>
            })}
        </table>
    }, [data])
    
    return (
        <div className={`wrapper wrapper-words ${right ? 'right-wrapper' : ''}`} >
           {count > 1 ?
           <h1>{"Поздравляю! Вы справились со всеми заданиями"}</h1>:
           !text ? 
            <>
                 <div className='flex-container-payment'>
                {img.map(item=>{
                    return <img className='image-payment' src={item} alt="img"/>
                })}
            </div>
            {renderTable}
            </> :
            <h1>Вы все верно ввели, дождитесь вторую команду</h1>
           }
           
        </div>
    );
};

