import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name,picture,price,description} = service;
    return (
        <div className='service text-start p-2'>
            <img width={'300px'} src={picture} alt="" />
            <h2 className='mt-1'>{name}</h2>
            <p>{description}</p>
            <p>Price:{price}</p>
            <button className='btn btn-primary w-100 mx-auto text-center fs-5'>Booking</button>
        </div>
    );
};

export default Service;