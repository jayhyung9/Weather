import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";



function App() {

const [weather,setWeather]=useState(null);
const [city,setCity]=useState('');
const cities=['Paris', 'New york', 'Tokyo', 'Seoul'];
const [loading,setloading]=useState(false);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0ace0749e5f9bdbc572f7ae002371ac5&units=metric`;
    setloading(true);
    let response = await fetch(url)
  let data = await response.json();
  console.log("data", data);
  setWeather(data);
  setloading(false);
  
  };

const getWeatherByCity = async() => {
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0ace0749e5f9bdbc572f7ae002371ac5&units=metric`
setloading(true);
let response = await fetch(url)
  let data = await response.json();
  setWeather(data);
  setloading(false);
  
}

useEffect(()=>{
  if(city==""){
    getCurrentLocation();
  }else {
    getWeatherByCity()
  }
},[city]);

  return (
<div>
    {loading ? (
      <div className="container"> 
      <ClipLoader color="#f88c6b" loading={loading} size={150} />
      </div>
     ) : ( 
  <div className="container">
     <WeatherBox weather={weather} />
     <WeatherButton cities={cities} setCity={setCity} city={city} />
      </div>
     )}
     </div>
  );
}

export default App;
