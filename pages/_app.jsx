import '../styles/globals.css'
import Navbar from '../components/navbar.jsx'

function MyApp({ Component, pageProps }) {
  return (

    <div>
    <Navbar />
    <Component {...pageProps} /> 
    </div>

    )
}

export default MyApp
