import React from 'react';

const WeatherCard = ({ weather }) => {
  const { main, weather: weatherInfo, name } = weather;
  const temp = main.temp;
  const feelsLike = main.feels_like;
  const humidity = main.humidity;
  const description = weatherInfo[0].description;

  // Function to get appropriate weather icon
  const getWeatherIcon = (temp) => {
    if (temp <= 20) return '🌧️';  // Cold icon
    if (temp > 20 && temp < 30) return '🌤️';  // Comfortable icon
    return '☀️';  // Hot icon
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', background: '#fff' }}>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <p>🌡️ טמפרטורה נמדדת: {temp}°C</p>
      <p>💧 לחות: {humidity}%</p>
      <p>🧥 טמפרטורה מורגשת: {feelsLike}°C</p>
      <span style={{ fontSize: '40px' }}>{getWeatherIcon(temp)}</span>
    </div>
  );
};

export default WeatherCard;
