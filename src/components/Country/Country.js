import React from 'react';
import './country.css';

const Country = (props) => {
    console.log(props.country);
    const {name, capital, region, flag, population} = props.country
    
    return (
        <div className='country'>
            <h2>{name}</h2>
            <img src= {flag} alt="" /> 
            <br /> <br />
            <p><span>Capital:</span> {capital}, <span>Region:</span> {region}, <span>Population:</span> {population}</p>
        </div>
    );
};

export default Country;