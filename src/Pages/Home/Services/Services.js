import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect( ()=> {
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div id='services' className='mt-5'>
            <h2 className='services-title'>Services</h2>
            <div className="service-container mt-3">
            {
                services.map(service=><Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;