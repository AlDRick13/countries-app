import React from 'react';

//styles
import "../../styles/AllCountriesPage/AllCountries.css"

const AllCountries = ({name, flag}) => {
    
    return (
        <div className="country-container1">
            <h5>{name}</h5>
            <hr />
            <img src={flag} alt={name} />
        </div>
    )
    
}


export default AllCountries;