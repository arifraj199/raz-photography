import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name,picture,price,description} = service;
    const navigate = useNavigate();

    const navigateCheckout = ()=> {
        navigate('/checkout');
    }

    return (
        <div className='service text-start p-2'>
            <img width={'300px'} src={picture} alt="" />
            <h2 className='mt-1'>{name}</h2>
            <p>{description}</p>
            <p>Price:{price}</p>
            <button onClick={navigateCheckout} className='btn btn-primary w-100 mx-auto text-center fs-5'>Booking</button>
        </div>
    );
};

export default Service;