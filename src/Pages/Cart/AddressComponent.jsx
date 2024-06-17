import React from 'react';
import { Link } from 'react-router-dom';

const AddressComponent = ({ jsonF, toggleModal }) => {
    return (
        <div>
            {jsonF?.state !== "" ? (
                 <span className="text-sm">
                    <Link to="/payment">PROCEED TO CHECKOUT</Link>
                </span>
                
            ) : (
                    <span onClick={toggleModal}>Add Address</span>
            )}
        </div>
    );
};

export default AddressComponent;