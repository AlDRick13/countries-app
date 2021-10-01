import React from 'react';
import {Link} from 'react-router-dom';

//components
import WeatherInfo from "../components/WeatherInfo/WeatherInfo"
const WeatherPage = () => {
    return (
        <div className="all-countries-container">
                 <nav className="nav-all-countries">
                <Link to={`/`}><h1>COUNTRY SEARCHER!</h1></Link>
                <span>
                    

                </span>
                <Link to={`/`}>Go back!</Link>

            </nav>      
                <WeatherInfo/>
            
        </div>
    );
};

export default WeatherPage;