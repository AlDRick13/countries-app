import React from 'react';
import SvgLoader from '../media/SvgLoader.svg';
//styles
import "../styles/Loader.css";
const Loader = () => {
    return (
        <div className="loader">
            <img src={SvgLoader} alt="loader" />
        </div>
    );
};

export default Loader;