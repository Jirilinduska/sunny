
import ErrorContent from "../../components/ErrorContent/ErrorContent"

import { useEffect } from "react"

const Error = () => {

  useEffect( () => {
    document.title = 'Opps! Page Not Found'
  }, [] )
  
  return (
    <>
      <ErrorContent />
    </>
  )
}

export default Error