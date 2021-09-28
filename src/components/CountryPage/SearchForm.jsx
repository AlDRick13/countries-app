import React from 'react';
import {Link} from 'react-router-dom';

//styles
import "../../styles/CountryPage/SearchForm.css"

const SearchForm = ({setName, handleFetchCountryData}) => {
    return (
        <nav>
            <Link to={`/`}><h1>COUNTRY SEARCHER!</h1></Link>
            <span>
                <input type="" placeholder="Country's Name" 
                onChange={e => setName(e.target.value)}
                />
                <button onClick={handleFetchCountryData}>Buscar</button>

            </span>
            <Link to={`/allCountries`}>See all countries!</Link>

        </nav>
    );
};

export default SearchForm;
