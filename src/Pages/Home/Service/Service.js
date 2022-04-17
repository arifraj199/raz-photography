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
        <div className='service text-center p-2'>
            <img width={'300px'} src={picture} alt="" />
            <h3 className='mt-4 fw-bold'>{name}</h3>
            <p className='fs-5'>{description}</p>
            <p className='fw-bold fs-5'>Price:{price}</p>
            <button onClick={navigateCheckout} className='btn btn-primary text-center fs-5'>Booking</button>
        </div>
    );
};

export default Service;