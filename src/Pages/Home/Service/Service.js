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
        <div className='service p-2'>
            <img src={picture} alt="" />
            <h4 className='mt-4 fw-bold '>{name}</h4>
            <p className='fs-6'>{description}</p>
            <p className='fw-bold fs-5'>Price:{price}</p>
            <button onClick={navigateCheckout} className='btn btn-primary text-center fs-5'>Checkout</button>
        </div>
    );
};

export default Service;