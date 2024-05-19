import React from 'react';
import NestedChild from './NestedChild';

const OrdercardChild = ({ orderdata, orderNo }) => {
    // console.log("orderchild orderdata", orderdata);

   
    return (
        <div>
            {orderdata.map(pp=> (
                <div key={pp.product._id}>
                    <NestedChild pp={pp} orderNo={orderNo} />
                </div>
                
            ))}
        </div>
    );
}

export default OrdercardChild;
