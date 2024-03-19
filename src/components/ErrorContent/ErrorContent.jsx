import './ErrorContent.css'
import { Link } from 'react-router-dom'

const ErrorContent = () => {

  return (
    <section className="error">
        <h2>404</h2>
        <h3>Opps! This page could not be found</h3>
        <Link className='btns' to="/">Go to homepage</Link>
    </section>
  )
}

export default ErrorContent