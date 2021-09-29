import React from 'react';
import { useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Loader from "../components/Loader";

//components 
import AllCountries from "../components/AllCountriesPage/AllCountries";

//Styles
import "../styles/AllCountriesPage/AllCountries.css"
const AllCountriesPage = () => {

    const [data, setData] = useState();
    const [loader, setLoader] = useState(false);
    

    //funciones
    const handleFetchCountries = async () => {
        setLoader(true);
        try {
            const response = await fetch('https://restcountries.com/v3/all');
            const result = await response.json();
            setData(result);
            setLoader(false);
            
        } catch (error) {
            console.log(error);
            
        }        
    }

    useEffect(() =>{
        handleFetchCountries()

        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <div>
            <nav className="nav-all-countries">
        <Link to={`/`}><h1>COUNTRY SEARCHER!</h1></Link>
        <span>
            

        </span>
        <Link to={`/`}>Go back!</Link>

    </nav>
        {loader ? (<Loader/>) : 
        <div className="countries-container1">
        {data && data.map(country => <AllCountries key={country.name.common} name={country.name.common} flag={country.flags[0]}/>) }

</div>
}
        </div>
    );
};

export default AllCountriesPage;