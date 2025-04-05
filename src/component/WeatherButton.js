import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity,city}) => {
  console.log("cities?", cities);

  return (
    <div>

      <Button variant="warning"  className={city === "" ? "selected" : ""} onClick={()=>setCity("") }>
      Current Location </Button>



      {cities.map((item, index) => (
      
        <Button 
        variant="warning"
        key={index}
        onClick={()=>setCity(item)}
        className={city === item ? "selected" : ""}
        >
        {item}
        </Button>
      ))}
      </div>
  )
}

export default WeatherButton
