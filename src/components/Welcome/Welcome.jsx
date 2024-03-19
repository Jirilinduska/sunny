import './Welcome.css'
import '../../styles/style.css'

import { FaMapLocationDot } from "react-icons/fa6";

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Welcome = () => {

    const [welcomeBtn, setWelcomeBtn] = useState(true)
    const [errorMsg, setErrorMsg] = useState(false)
    const [cityName, setCityName] = useState('')

    const navigate = useNavigate()

    const locationHandler = (e) => {
        e.preventDefault()

        if(cityName === '') {

            setErrorMsg(true)

            setTimeout(() => {
                setErrorMsg(false)
            }, 1500);
        }

        if(cityName.trim() !== '') {
            navigate(`/weather/${cityName}`)
        }
    }


  return (
    <section className="welcome">


        {/* https://uiverse.io/zanina-yassine/weak-bobcat-68 */}

        <div className="welcome-loader">

            <div className="cloud front">
                <span className="left-front"></span>
                <span className="right-front"></span>
            </div>

            <span className="sun sunshine"></span>
            <span className="sun"></span>
            
            <div className="cloud back">
                <span className="left-back"></span>
                <span className="right-back"></span>
            </div>

        </div>



        { welcomeBtn && 

                <div className="welcome-text">

                    <h1>Welcome to SUNNY</h1>

                    <Link 
                        onClick={ () => setWelcomeBtn(false)}
                        className='btns'
                    >
                        Get weather
                    </Link>
    
                </div>
        }

        { !welcomeBtn && 
                <div className="select">

                    <h3>Please select city... <FaMapLocationDot /> </h3>

                    <div className="select-buttons">

                        <form id='search-loc' onSubmit={locationHandler}>

                            <input 
                                type="text" 
                                placeholder='Search city...'
                                value={cityName}
                                onChange={ (event) => setCityName(event.target.value)}
                            />

                            <input 
                                type="submit" 
                                className='btns'
                                value={`Search`}
                            />

                            {/* error message  */}
                            { errorMsg && 
                                <div className="error-msg">
                                    <p>Please type in city name...</p>
                                </div>
                            }

                        </form>
                    </div>
                </div>
        }



        <div className="bottom-line">
            <p><span>SUNNY</span> &copy; 2024</p>
            <p>design & code <Link to="http://jirilinduska.cz/" target='_blank'>@jirilinduska</Link></p>
        </div>

    </section>
  )
}

export default Welcome