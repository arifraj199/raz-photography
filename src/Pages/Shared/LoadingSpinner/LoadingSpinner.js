import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.css';


const LoadingSpinner = () => {
    return (
        <div className='spinner-container'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default LoadingSpinner;