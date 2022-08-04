import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/pages/home'
import SliderMainHome from '../components/components/SliderMainHome';
import Roadmap from '../components/components/Roadmap'
import axios from 'axios'
import BiddyHeader from '../components/menu/BiddyHeader';
import StarryGalaxy from '../components/components/StarryGalaxy';
import constants from '../src/constants';
import Reveal from 'react-awesome-reveal';
import { fadeIn } from '../lib/CssHelper'
import Footer from '../components/components/footer';


export default function Home() {
  const [nftListings, setNftListings] = useState([]);
  useEffect(() => {
    axios.get(constants.API_URL + '/api/nft_listings').then(response => {
      setNftListings(response.data)
    })
    // Update the document title using the browser API
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <StarryGalaxy />
      <BiddyHeader />
      
      <section className='container' >
        <SliderMainHome />
      </section>
      <section>
        <Reveal className='onStep' keyframes={fadeIn} delay={1000} duration={1000} triggerOnce>
          <h2 className="col-white" style={{textAlign: 'center' }}>
            Upcoming Missions
          </h2>
        </Reveal>
        <Roadmap />
      </section>

      
      <Footer />

    </div>
  )
}
