import React from 'react';
import { useNavigate } from 'react-router-dom';
import GetReady from '../GetReady/GetReady';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='text-center'>
            <div className="img-container text-white">
                <h2> Take Best Wedding Photography</h2>
                <p>Provide Best Service</p>
                <button onClick={()=> navigate('/about')} className='btn btn-primary'>Know More</button>
            </div>
            <Services></Services>
            <Portfolio></Portfolio>
            <GetReady></GetReady>
        </div>
    );
};

export default Home;