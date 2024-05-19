import React, { useState } from 'react';

import OrdercardChild from './OrdercardChild';

const OrderCard = ({ order }) => {
    const [myOrder, setOrder] = useState([order.order.items]);
    const [orderNo, setOrderNumber] = useState(order.order._id);

    const [orderIndex, setOrderIndex] = useState([]);
    // console.log("order datas ....", myOrder);

    // console.log("order orderNo..........", orderNo);
    // myOrder.map(orderdata => {
    //     console.log("order item in array", orderdata);
    //     setOrderIndex(orderdata);
    // })

    // orderIndex.map(p=> {
    //     console.log("p",p);
    // })

   


    return (
        <>
           
            {
                myOrder.map((orderdata,i )=> (
                    <div key={i}>
                        <OrdercardChild orderdata={orderdata} orderNo={orderNo} />
                    </div>
                    
                ))
            }
            
        </>
    );
}

export default OrderCard;
