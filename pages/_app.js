import "../assets/animated.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/elegant-icons/style.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
import '../assets/style.scss';
import '../styles/globals.css'
import Script from 'next/script'

import React, {useRef, useState} from 'react'

import '../src/stylesheets/Roadmap.css'

import '../src/stylesheets/App.css'
import '../src/stylesheets/DonutChart.css'
import '../src/stylesheets/FancyCountdown.css'
import 'swiper/css';
import '../src/stylesheets/Slider.scss'
import '../src/stylesheets/Hover.scss'
import '../src/stylesheets/Hover2.css'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function MyApp({ Component, pageProps }) {
  const ref = useRef(null)
  const [width, setWidth] = useState('100%');
  React.useEffect(() => {
    if ((typeof window !== 'undefined')){
      // width = window.clientWidth
      addEventListener('resize', (event) => {
        setWidth(screen.availWidth)
        console.log('window.availWidth resize', window.innerWidth)
      });
      console.log('window.availWidth', window.innerWidth)
      setWidth(window.innerWidth)
    }
  }
  , [])
  console.log('width', width)
  // if ((typeof window !== 'undefined')){
  //   width = window.clientWidth
  // }
  // console.log('width', width)
  return <div style={{width: width}}>
  <Script src="https://www.google-analytics.com/analytics.js" />
  <Component {...pageProps} />
  </div>
}

export default MyApp
