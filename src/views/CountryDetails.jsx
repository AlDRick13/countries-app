import React,{useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import CountryInfo from '../components/CountryDetails/CountryInfo';
//styles 
// import "../styles/CountryPage/Country.css"
const CountryDetails = () => {
    const {country} = useParams();

    const [details, setDetails] = useState([])
    
    const fetchDetailsAPI = async () => {
        try {
            const response = await fetch(
                `https://restcountries.com/v3/name/${country}`
            );
            const result = await response.json();
            setDetails(result);
            console.log(result);

        } catch (error) {
            console.log(error)
            
        }
    };

    useEffect(() => {
        fetchDetailsAPI();
        
    },);
    console.log(details)

    return (
        
            details && details.length>0 && (
        <div className="country-details" >
            <Link to={`/`}><h3>Go back!</h3> </Link>
            <CountryInfo name={details[0].name.common} capital={details[0].capital} subregion={details[0].subregion} fullName={details[0].name.official} flag={details[0].flags[0]} />
        </div>
            )

        
        
        // <h1>Hola</h1>
        // <div className="country-container">
        //     <h1>{details.name.common}</h1>
        //     <img src={details.flags[0]} alt={details.name.common} />
        //     <p>Capital: {details.capital[0]}</p>
        //     <p>Official name: {details.name.official}</p>
        //     <p>SubRegion: {details.subregion}</p>
        // </div>
    )
}

export default CountryDetails;