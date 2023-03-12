import React, {useMemo} from 'react';

export const PaymentComponent = ({right, data}) => {
    const renderTable=useMemo(()=>{
        return <table>
            <tr>
                <th>Наименование</th>
                <th>Цена</th>
                <th>Колличество</th>
                <th>Стоимость</th>
                <th>Итог</th>

            </tr>
        </table>
    },[data])
    return (
        <div className={`wrapper wrapper-words ${right ? 'right-wrapper' : ''}`} >
            
        </div>
    );
};

