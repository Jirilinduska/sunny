
import { useEffect, useState } from 'react'
import './FutureWeatherItem.css'

const FutureWeatherItem = ( {weatherItem, index } ) => {

    const [weatherInfo, setWeatherInfo] = useState(null)

    useEffect( () => {

        const dateOfItem = new Date(weatherItem.dt * 1000)
        const dayOfItem = dateOfItem.getDay()
        const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        const weatherInfo = {
            itemTime: daysInWeek[dayOfItem],
            itemIcon: `https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png`,
            itemWeather: weatherItem.weather[0].main,
            itemTemp: `${Math.round(weatherItem.main.temp)}°c`,
        }

        setWeatherInfo(weatherInfo)

    }, [weatherItem] )

  return (
    <div className="future-item">

        {
            weatherInfo ? (

                <div className="future">
                    
                    <p className="future-title"> {weatherInfo.itemTime} </p>
                    
                    <div className="future-icon">
                        <img src={weatherInfo.itemIcon} alt="" />
                    </div>

                    <p className="future-weather"> {weatherInfo.itemWeather} </p>
                    <p className="future-temp"> {weatherInfo.itemTemp} </p>
                </div>
            )
            : 
            null
        }

    </div>
  )
}

export default FutureWeatherItem