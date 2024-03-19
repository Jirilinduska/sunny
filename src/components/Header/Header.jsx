import './Header.css'

import { IoHomeSharp } from "react-icons/io5"

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  const [dateToday, setDateToday] = useState('')
  const [dayToday, setDayToday] = useState('')
  const [timeToday, setTimeToday] = useState('')

  const updateDateTime = () => {

    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const dayIndex = today.getDay()
    const todayDay = days[dayIndex]

    const dateString = `${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}`

    const hours = today.getHours();
    const minutes = today.getMinutes().toString().padStart(2, '0')

    const timeString = `${hours}:${minutes}`

    setDateToday(dateString)
    setDayToday(todayDay)
    setTimeToday(timeString)
  }

  useEffect(() => {

    updateDateTime()

    const intervalId = setInterval(updateDateTime, 10000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <header>

      <Link to="/">
        <IoHomeSharp className='header-icon'/>
      </Link>

      <div className="date-wrapper">

        <p className="day">{dayToday}</p>
        <p className="date">{dateToday}</p>
        <p className="time">{timeToday}</p>

      </div>

    </header>
  );
};

export default Header
