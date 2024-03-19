import { useEffect, useState } from "react";

const apiKey = 'f3a44154dd8db973811a92eac09c48ed'

const useFetch = (location) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weatherData, setweatherData] = useState(null)

    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    const urlGetWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    const urlGetCoords = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${apiKey}`

    useEffect( () => {

        const getData = () => {

            fetch(urlGetCoords)
                .then( (res) => {
                    if(!res.ok) {
                        throw Error('Something went wrong!')
                    }
                    return res.json()
                })

                .then((data) => {
                    setLatitude(data[0].lat.toFixed(2))
                    setLongitude(data[0].lon.toFixed(2))
                    setError(null)
                })

                .catch( (err) => {
                    setError(err.message)
                    setLoading(false)
                })

            fetch(urlGetWeather)
                .then( (res) => {
                    if(!res.ok) {
                        throw Error('Something went wrong')
                    }
                    return res.json()
                })

                .then((data) => {
                    setweatherData(data)
                    setError(null)
                    setLoading(false)
                })
                .catch( (err) => {
                    setError(err.message)
                    setLoading(false)
                })
            }

        getData()

    }, [location, urlGetWeather, urlGetCoords])

    return { weatherData, loading, error}
}

export default useFetch
