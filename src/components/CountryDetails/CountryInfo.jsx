import React from 'react';

//styles 
import "../../styles/CountryPage/Country.css"
const CountryInfo = ({name, flag, fullName, capital, subregion}) => {

    return (
        <div className="country-container">
            <h2>{name}</h2>
            <img src={flag} alt={name} />
            <hr />
            <p><h3>Capital:</h3> {capital}</p>
            <hr />
            <p><h3>Official name: </h3>{fullName}</p>
            <hr />

            <p><h3>SubRegion: </h3>{subregion}</p>
        </div>
    )
}

export default CountryInfo;