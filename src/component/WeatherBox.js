import React from 'react'

const WeatherBox = ({weather}) => {
  console.log("weather?", weather)
  

  return (
    <div className="Weather-box">
      <div>{weather?.name}</div>
      <div>{Math.round(weather?.main.temp)}℃/ {Math.round(weather?.main.temp*1.8+32)}℉ </div>
      <div>{weather?.weather[0].main}</div>
    </div>
  )
};

export default WeatherBox
