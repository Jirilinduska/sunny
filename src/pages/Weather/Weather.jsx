import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
import ErrorSearch from "../../components/ErrorSearch/ErrorSearch";
import WeatherSection from "../../components/WeatherSection/WeatherSection";
import useFetch from "../../data/useFetch/useFetch";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Weather = () => {

  const { location } = useParams()  
  const { loading, weatherData, error} = useFetch(location)

  useEffect( () => {
    document.title = `SUNNY - Weather in ${location}`
  }, [location] )  


  return (
    <>

      { error && <ErrorSearch/> } 

      { loading && <Loader /> }
    
      {weatherData && 
          <>
            <Header />
            <WeatherSection weatherData={weatherData} />
          </>
      }

    </>
  )
}

export default Weather