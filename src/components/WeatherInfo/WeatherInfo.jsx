import {React, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const WeatherInfo = () => {

    const [countryData, setCountryData] = useState('')
    const [data, setData] = useState(null);
    const {country} = useParams()

    //Funciones

    const fetchDetailsAPI = async () => {
        try {
            const response = await fetch(
                `https://restcountries.com/v3/name/${country}`
            );
            const result = await response.json();
            setCountryData(result[0].capital[0]);
            console.log(result);

        } catch (error) {
            console.log(error)
            
        }
    };
    
    useEffect (() => {
        fetchDetailsAPI()
                // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
console.log(countryData)

    const handleFetchWeatherInfo = async () => {

        const key = 'e0090a221b304252859142354211008'
        const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${countryData}&aqi=no`

        const response = await fetch(url);
        const result = await response.json();
        setData(result)
        console.log(result); 
    }

    console.log(data)

    useEffect(()=>{
        if(countryData){
            handleFetchWeatherInfo()

        }
                // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryData])



    return (
        data &&(
            <div className="Weather-box">
        <h2>{data.location.name}, {data.location.region}, {data.location.country}</h2>
        <div className="Width-50">
            <img src={data.current.condition.icon} alt="weather" width={80} height={80} />
            <div><h3>{data.current.temp_c}°C</h3></div>
        </div>
        <div className="Width-50">
            <h4>{data.current.condition.text}</h4>            
            <h4>Feels like: {data.current.feelslike_c}°C</h4>
            <h4>Humidity: {data.current.humidity}</h4>
            <h4>Windspeed: {data.current.wind_kph}k/h</h4>


        </div>
    </div>
        )
    );
};


export default WeatherInfo;