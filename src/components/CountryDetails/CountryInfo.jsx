import React from 'react';
import {Link} from 'react-router-dom';

//styles 
import "../../styles/CountryPage/Country.css"
const CountryInfo = ({name, flag, fullName, capital, subregion}) => {

    return (
        <div className="country-container">
            <h2>{name}</h2>
            <img src={flag} alt={name} />
            <hr />
            <h3>Capital: </h3>
            <p> {capital}</p>
            <hr />
            <h3>Official name: </h3>
            <p>{fullName}</p>
            <hr />
            <h3>SubRegion: </h3>

            <p>{subregion}</p>
            <hr />
            <Link to={`/details/${name}/weather`}><button>See Capital Weather!</button></Link>
        </div>
    )
}

export default CountryInfo;