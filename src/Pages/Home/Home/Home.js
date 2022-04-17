import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className='text-center'>
            <div className="img-container text-white">
                {/* <img width={'100%'} height={'600px'} src="https://i.ibb.co/WzngJdb/wedding-couple-france.png" alt="" /> */}
                <h2> Take Best Wedding Photography</h2>
                <p>Provide Best Service</p>
                <button className='btn btn-primary'>Know More</button>
            </div>
            <Services></Services>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;