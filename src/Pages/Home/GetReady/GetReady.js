import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GetReady.css';

const GetReady = () => {
    const navigate = useNavigate();
    return (
        <div className='getReady-container'>
            <h3 className='fs-1'>Ready To Book?</h3>
            <p className=' fs-4'>Your wedding experience is so much more than just a booking process and filling out "paperwork", it's preserving your memories to be relived through photographs, it's help with planning to ensure your wedding vision is brought to life, it's your vendors working as a team to give you the day you have dreamed of, its capturing the details you put thought into. Please fill out a contact form and let's chat!</p>
            <button onClick={()=> navigate('/login')} className='btn btn-success fs-4 mt-1'>Let's Go</button>
        </div>
    );
};

export default GetReady;