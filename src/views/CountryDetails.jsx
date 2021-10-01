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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    console.log(details)

    return (
        
            details && details.length>0 && (
        <div className="country-details" >
            <Link to={`/`}><h4>Go back!</h4> </Link>
            <CountryInfo name={details[0].name.common} capital={details[0].capital} subregion={details[0].subregion} fullName={details[0].name.official} flag={details[0].flags[0]} />
        </div>)
    )
}

export default CountryDetails;