import React from 'react';

//styles 
import "../styles/FetchError.css";

const FetchError = ({message}) => {
    return (
        <div className="video-container">
            <video preload="true" autoPlay muted loop playsinline >
                <source src="https://freefrontend.com/assets/img/html-css-404-page-templates/neon-404-page-not-found.mp4" type="video/mp4"/>
            </video>

            <p>:(</p>
            <p>{message} </p>
        </div>
    );
};

export default FetchError;

