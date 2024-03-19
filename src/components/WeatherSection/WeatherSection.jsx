import './WeatherSection.css'
import '../../styles/style.css'

import { FiSunrise, FiSunset } from "react-icons/fi"
import { WiHumidity } from "react-icons/wi"
import { FaWind } from "react-icons/fa6"
import { useEffect, useState } from 'react'

import WeatherItem from '../WeatherItem/WeatherItem'
import FutureWeatherItem from '../FutureWeatherItem/FutureWeatherItem'



const WeatherSection = ({ weatherData }) => {

  const [cityData, setCityData] = useState(null)
  const [futureWeatherData, setfutureWeatherData] = useState([])

  const sunTimeFormat = (time, timezone) => {
    const timeMiliSec = time * 1000
    const date = new Date(timeMiliSec + timezone * 1000)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const hoursFormatted = hours < 10 ? `0${hours}` : hours
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes
    return `${hoursFormatted}:${minutesFormatted}`
  }

  useEffect(() => {
    if (
      weatherData && 
      weatherData.city && 
      weatherData.city.name && 
      weatherData.city.sunrise && 
      weatherData.city.sunset
    ) {

      // time data
      const currentTime = new Date()
      const localTime = new Date(currentTime.getTime() + (1000 * weatherData.city.timezone))

      // sunrise + sunset data
      const sunRiseFormatted = sunTimeFormat(weatherData.city.sunrise, weatherData.city.timezone)
      const sunSetFormatted = sunTimeFormat(weatherData.city.sunset, weatherData.city.timezone)

      const cityInfo = {
        sunSet: sunSetFormatted,
        sunRise: sunRiseFormatted,
        currentTime: localTime.toISOString().slice(11, 16),
        cityName: weatherData.city.name,
        cityCountry: `(${weatherData.city.country})`,
        cityIcon: `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`,
        cityTemp: `${Math.round(weatherData.list[0].main.temp)}°c`,
        cityWeather: weatherData.list[0].weather[0].main,
        cityHumidity: `${weatherData.list[0].main.humidity}%`,
        cityTempFeels: `${Math.round(weatherData.list[0].main.feels_like)}°c`,
        cityWind: `${weatherData.list[0].wind.speed} m/s`,
      }

      setCityData(cityInfo)

      // Future weather data
      const futureWeatherIndex = [8, 16, 24, 32]
      const futureWeather = weatherData.list.filter( (x, index) => futureWeatherIndex.includes(index))
      setfutureWeatherData(futureWeather)

    }
  }, [weatherData])

  return (
    <section className="weather">

      {cityData && 
        <>
          <div className="weather-left">
            <p className="city-title"> {`${cityData.cityName} ${cityData.cityCountry}`} </p>

            <p className="city-time">{cityData.currentTime}</p>


            <div className="current-weather">

              <div className="current-icon"> 
                <img src={cityData.cityIcon} alt={cityData.cityWeather} />
              </div>

              <div className="current-type">
                <p> {cityData.cityWeather} </p>
              </div>

              <div className="current-temp">
                <p> {cityData.cityTemp} </p>
              </div>

              <div className="current-feelslike">
                <p> feels like {cityData.cityTempFeels} </p>
              </div>

              <div className="current-humidity">
                <p> <WiHumidity /> {cityData.cityHumidity} </p>
              </div>

              <div className="current-wind">
                <p> <FaWind /> {cityData.cityWind}</p>
              </div>

            </div>


            <div className="suninfo">

              <div className="sunrise">
                <p>
                  <FiSunrise /> {cityData.sunRise}
                </p>
              </div>

              <div className="sunset">
                <p>
                  <FiSunset /> {cityData.sunSet}
                </p>
              </div>

            </div>
          </div>


          <div className="weather-right">
              
          <div className="today">
            {weatherData.list.slice(0, 5).map( (item, index) => 
              <WeatherItem 
                key={index} 
                weatherItem={item} 
                timezone={weatherData.city.timezone} 
                index={index + 1} 
              />
            )}
          </div>

          <div className="line"></div>

            <div className="week">
              {futureWeatherData.map( (item, index) => 
                <FutureWeatherItem 
                  key={index} 
                  weatherItem={item} 
                  index={index + 1}
                />
              )}
            </div>

          </div>
      
      
        </>
      }  
    </section>
  )
}

export default WeatherSection
