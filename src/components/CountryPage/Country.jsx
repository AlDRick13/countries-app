import React from 'react';
import {Link} from "react-router-dom";

//Styles
import "../../styles/CountryPage/Country.css";

const Country = ({flag, name, code}) => {
    return (
        <div className="country-container">
            <h2>{name}</h2>
            <img src={flag} alt={code} />
            <Link to={`/details/${name}`}>See more</Link>
        </div>
    );
};

export default Country;