import React from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
    background-color: #f7f7f7;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`;

const WeatherDisplay = ({ weather }) => {
    return (
        <WeatherContainer>
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main && weather.main.temp}°C</p>
                    <p>Weather: {weather.weather && weather.weather[0].description}</p>
                </div>
            )}
        </WeatherContainer>
    );
}

export default WeatherDisplay;
