
import Welcome from "../../components/Welcome/Welcome"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"
import { useEffect, useState } from "react"

const Home = () => {

  const [loading, setLoading] = useState(true)

  useEffect( () => {

    setTimeout(() => {
      setLoading(false)
    }, 1500);

    document.title = 'SUNNY - Weather App'

  }, [loading] )

  return (
    <>
      { loading ? <Loader /> :
      
        <>
          <Header />
          <Welcome />
        </>
  
      }
    </>
  )
}

export default Home