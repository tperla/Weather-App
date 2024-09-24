import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';  // Import the WeatherCard component
import './App.css';

function App() {
  // Initial state to store weather data for multiple locations
  const [weatherData, setWeatherData] = useState([]);

  // Example cities with city names and OpenWeatherMap API key
  const cities = ['Eilat', 'London', 'New York', 'Alaska'];
  const apiKey = '8ee633956bad6ae1965b557a94ecfcba'; // Your OpenWeatherMap API key

  // Fetch weather data when the component mounts
  useEffect(() => {
    const fetchWeather = async () => {
      const data = await Promise.all(cities.map(async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=he&appid=${apiKey}`);
        const result = await response.json();
        return result;
      }));
      setWeatherData(data);
    };

    fetchWeather();
  }, []);  // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather in 4 Locations</h1>
      </header>

      {/* Display the weather cards using the WeatherCard component */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '20px' }}>
        {weatherData.length > 0 && weatherData.map((data, index) => (
          <WeatherCard key={index} weather={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
