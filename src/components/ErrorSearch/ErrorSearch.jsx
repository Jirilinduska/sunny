import './ErrorSearch.css'
import '../../styles/style.css'

import { Link } from 'react-router-dom'

const ErrorSearch = () => {

  return (
    <div className="error-search">

        <p>Ops... Location you've searched for might not exist! 🤨</p>

        <Link 
            className='btns'
            to="/"
        >
            Try again
        </Link>

    </div>
  )
}

export default ErrorSearch