import Layout from '../components/Layout'
import '../styles/globals.css'
import Snowfall from 'react-snowfall'

const MyApp = ({ Component, pageProps }) =>(
  <Layout>
    <Component {...pageProps}/>
    <Snowfall/>
  </Layout>

)

export default MyApp;


