import './styles/style.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Weather from './pages/Weather/Weather'
import Error from './pages/Error/Error'


const App = () => {
  return (
    <BrowserRouter>
    
        <Routes>

              <Route path='/' element={ < Home /> } />   

              <Route path='/weather/:location' element={ < Weather /> } />  

              <Route path='*' element={ < Error /> } />        

        </Routes>
    
    </BrowserRouter>
  )
}

export default App