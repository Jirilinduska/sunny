import { useEffect, useState } from 'react'
import './WeatherItem.css'

const WeatherItem = ( {weatherItem, timezone } ) => {

    const [weatherInfo,  setWeatherInfo] = useState(null)

    useEffect( () => {

        if( weatherItem) {

          const itemTimeMilisec = weatherItem.dt * 1000
          const itemFutureTime = new Date(itemTimeMilisec + timezone * 1000)
          const itemHours = itemFutureTime.getHours()
          const itemMinutes = itemFutureTime.getMinutes()
          const itemHoursFormatted = itemHours < 10 ? `0${itemHours}` : itemHours
          const itemMinutesFormatted = itemMinutes < 10 ? `0${itemMinutes}` : itemMinutes
            
            const itemData = {
                itemTime: `${itemHoursFormatted}:${itemMinutesFormatted}`,
                itemIcon: `https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}.png`,
                itemWeather: weatherItem.weather[0].main,
                itemTemp: `${Math.round(weatherItem.main.temp)}°c`,
            }

            setWeatherInfo(itemData)
        }

    }, [weatherItem, timezone] )

  return (

    <div className="today-item">
      {weatherInfo ? (
        <>
          <p className="today-title"> {weatherInfo.itemTime} </p>
          <div className="today-icon">
            <img src={weatherInfo.itemIcon} alt="" />
          </div>
          <p className="today-weather"> {weatherInfo.itemWeather} </p>
          <p className="today-temp"> {weatherInfo.itemTemp} </p>
        </>
      ) : null}
    </div>
  )
}

export default WeatherItem