import React, {useMemo} from 'react';
import './style.css'
export const PaymentComponent = ({right, data}) => {
    const renderTable=useMemo(()=>{
        return <table className='table'>
            <tr>
                <th>Наименование</th>
                <th>Цена</th>
                <th>Колличество</th>
                <th>Стоимость</th>
            </tr>
            {data.map(item=>{
                return <tr> 
                    {item.map(items=>{
                        if(items){
                            
                            return items==='Итого' ? <th>{items}</th> : <td>{items}</td>
                        }
                        return <td>
                            <input/>
                        </td>
                    })}
                </tr>
            })}
        </table>
    },[data])
    return (
        <div className={`wrapper wrapper-words ${right ? 'right-wrapper' : ''}`} >
            {renderTable}
        </div>
    );
};

