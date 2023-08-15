import React, { useState } from 'react';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const API_KEY = '2ad203a642ec2d5a2d8af2a3b67a5cc2';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);

    const getWeather = async (city) => {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();
        setWeatherData(data);
    };

    return (
        <div className="app">
            <Header />
            <div className="container mt-5">
                <WeatherForm getWeather={getWeather} />
                <WeatherDisplay weather={weatherData} />
            </div>
        </div>
    );
}

export default App;