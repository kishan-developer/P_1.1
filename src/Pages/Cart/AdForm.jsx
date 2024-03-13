import React, { useState } from 'react';
import '../Cart/AddressForm.css';
import { MdArrowForwardIos } from "react-icons/md";

const AddressForm = () => {
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pincode, setPincode] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [area, setArea] = useState('');
    const [landmark, setLandmark] = useState('');
    const [state, setState] = useState('Delhi');
    const [addressType, setAddressType] = useState('HOME');

    const onSaveAddress = () => {
        // Save the address here
        console.log({
            fullName,
            mobileNumber,
            pincode,
            city,
            street,
            area,
            landmark,
            state,
            addressType,
        });
    };

    return (
        <div className="address-form-container">
            <h2 className='font-bold text-[17px]'>Edit Address</h2>
            <div className="address-form">
           
                <div className="form-group block my-2">
                    <label htmlFor="fullName">Full Name</label>
                    <div className='flex h-[40px] px-5 bg-white justify-center items-center gap-3 border-2 border-gray-700 rounded-md'>
                        
                        <input
                            type="text"
                            className="form-control flex-1"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <MdArrowForwardIos size={20} />
                    </div>
                    
                </div>
                <div className="form-group my-3">
                    <label htmlFor="mobileNumber">Mobile Number (+91)</label>
                    <div className='flex h-[40px] px-5 bg-white justify-center items-center gap-3 border-2 border-gray-700 rounded-md'>
                        <input
                            type="tel"
                            className="form-control flex-1"
                            id="mobileNumber"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                    </div>
                    
                </div>
                <div className="form-group my-5">
                    <label htmlFor="pincode">Pincode / Postal Code / Zipcode</label>
                    <div className='flex h-[40px] px-5 bg-white justify-center items-center gap-3 border-2 border-gray-700 rounded-md'>
                        <input
                            type="text"
                            className="form-control flex-1"
                            id="pincode"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                        />
                    </div>
                    
                </div>
                <div className='flex my-3'>
                    <div className="form-group mr-2">
                        <label htmlFor="city">City</label>
                        <div className='flex h-[40px] px-5 bg-white justify-center items-center gap-3 border-2 border-gray-700 rounded-md'>
                            <input
                                type="text"
                                className="form-control flex-1"
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                       
                    </div>
                    <div className="form-group ">
                        <label htmlFor="state">State</label>
                        <div className='flex h-[40px] px-5 bg-white justify-center items-center gap-3 border-2 border-gray-700 rounded-md'>
                            <input
                                type="text"
                                className="form-control flex-1"
                                id="state"
                                value="Delhi"
                                readOnly
                            />
                        </div>
                        
                    </div>
                </div>
               

                <div className="form-group my-2">
                    <label htmlFor="street">Flat no / Building, Street name</label>
                    <div className='flex h-[50px] px-5 bg-white justify-center items-center gap-3 border-2 border-gray-700 rounded-md'>
                        <input
                            type="text"
                            className="form-control flex-1"
                            id="street"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </div>
                    
                </div>
                <div className="form-group my-2">
                    <label htmlFor="area">Area / Locality</label>
                    <div className='flex h-[50px] px-5 bg-white justify-center items-center gap-3 border-2 border-gray-700 rounded-md'>
                        <input
                            type="text"
                            className="form-control flex-1"
                            id="area"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        />
                    </div>
                    
                </div>
                <div className="form-group my-2">
                    <label htmlFor="landmark">Landmark (Optional)</label>
                    <div className='flex h-[40px] px-5 bg-white justify-center items-center gap-3 border-2 border-gray-700 rounded-md'>
                        <input
                            type="text"
                            className="form-control flex-1"
                            id="landmark"
                            value={landmark}
                            onChange={(e) => setLandmark(e.target.value)}
                        />
                    </div>
                    
                </div>
               
                <div className="form-group my-5">
                    <label htmlFor="addressType">Save Address As</label>
                    <select
                        className="form-control flex-1"
                        id="addressType"
                        value={addressType}
                        onChange={(e) => setAddressType(e.target.value)}
                    >
                        <option value="HOME">Home</option>
                        <option value="OFFICE">Office</option>
                        <option value="OTHER">Other</option>
                    </select>
                </div>
                <button
                    type="button"
                    className="btn bg-[#51CCCC] px-3 py-2 text-black font-bold"
                    onClick={onSaveAddress}
                >
                    Save Address
                </button>
            </div>
        </div>
    );
};

export default AddressForm;