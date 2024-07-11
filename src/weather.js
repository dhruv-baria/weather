import React, { useState } from "react";
import axios from "axios";
import LoadingBar from 'react-top-loading-bar'

const Weather = () => {
    const [progress, setProgress] = useState(0)
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1e0e9d26eca35dd7ac3552443c742500&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
    setProgress(100)
  };

  return (
    <div className=" text-slate-300">
         <LoadingBar
        color='#FFFFFF'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <form onSubmit={handleSubmit }>
        <input className="border border-gray-950 p-2 m-2 rounded-md bg-slate-200 text-gray-900 "
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
    <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> Get Weather</button>
    
      </form>
      {weatherData && (
        <div>
          <h2 className="font-semibold text-lg">{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <div>
            <img className="m-auto justify-center w-40 h-32 rounded-2xl" src="https://www.pngall.com/wp-content/uploads/11/Weather-Background-PNG.png" alt=""/>
          <p>{weatherData.weather[0].main}</p>
          </div>
          <div className="flex justify-center items-center ">
          <p className="mx-6">Temperature: {weatherData.main.temp} 🌡 °C</p>
          <p>Temperature feels like: {weatherData.main.feels_like} 🌡 °C</p>
          </div>
          <p>Humidity: {weatherData.main.humidity}💧</p>
          <div className="flex justify-center items-center">
          <p >Min Temperature: {weatherData.main.temp_min} 🌤 °C</p>
          <p>Max Temperature: {weatherData.main.temp_max} 🌨 °C</p>
          </div>
          <p>Visibility: {weatherData.visibility}</p>
          <p>Wind speed: {weatherData.wind.speed} 🌫</p>

        </div>
      )}
    </div>
  );
};

export default Weather;
