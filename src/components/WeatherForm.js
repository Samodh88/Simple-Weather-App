import React, { useState } from 'react';

const WeatherForm = ({ getWeather }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather(city);
    };

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                    Get Weather
                </button>
            </div>
        </form>
    );
}

export default WeatherForm;