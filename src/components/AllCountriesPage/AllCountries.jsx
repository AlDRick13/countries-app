import React from 'react';

//styles
import "../../styles/AllCountriesPage/AllCountries.css"

const AllCountries = ({name, flag}) => {
    
    return (
        <div className="country-container1">
            <h3>{name}</h3>
            <img src={flag} alt={name} />
        </div>
    )
    
}


export default AllCountries;