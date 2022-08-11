import "../assets/animated.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/elegant-icons/style.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../assets/style.scss';
import '../styles/globals.css'
import Script from 'next/script'



import '../src/stylesheets/Roadmap.css'

import '../src/stylesheets/App.css'
import '../src/stylesheets/DonutChart.css'
import '../src/stylesheets/FancyCountdown.css'
import 'swiper/css';
import '../src/stylesheets/Slider.scss'
import '../src/stylesheets/Hover.scss'
import '../src/stylesheets/Hover2.css'


function MyApp({ Component, pageProps }) {
  return <>
  <Script src="https://www.google-analytics.com/analytics.js" />
  <Component {...pageProps} />
  </>
}

export default MyApp
