import React, {useState, useEffect} from 'react';

//components
import Country from "../components/CountryPage/Country"
import SearchForm from "../components/CountryPage/SearchForm";
import FetchError from "../components/FetchError"
//styles
const CountryPage = props => {

    const[countryData, setCountryData] = useState([]);
    const [name, setName] = useState('Argentina');
    const [error, setError] = useState(false);
    //Funciones
    const handleFetchCountryData = async () => {
        try {
            const response = await fetch (
                `https://restcountries.com/v3/name/${name}?fullText=true`
            );
            const result = await response.json();
            if (result.status) {
                setError(result.message);
            } else {
                setCountryData (result);
                setError(false);
            }
            
        } catch (e) {
            console.log(e);          
        }

        
    };
    
    useEffect (()=>{
        handleFetchCountryData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <SearchForm setName={setName} 
            handleFetchCountryData={handleFetchCountryData}
            />
            
           { error ? (
                <FetchError message={error}/>
            ) : (
                <div>
                    {countryData.map(infoCountry =>(
                        <Country
                            key={infoCountry.name.common} 
                            flag={infoCountry.flags[0]} 
                            name={infoCountry.name.common} 
                            code={infoCountry.cca2} 
                        />
                    ))}
                </div>
            )}
        </>
    );
};

    


export default CountryPage;