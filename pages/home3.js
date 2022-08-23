import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StarryGalaxy from '../components/components/StarryGalaxy';
import BidForm from '../components/pages/news';
import News from '../components/pages/news';
import Author from '../components/pages/Author';
// import BidForm from '../components/pages/news';
// import Explore from '../components/pages/explore';
// import Explore2 from '../components/pages/explore2';
import Login2 from '../components/pages/loginTwo';
import Login from '../components/pages/login';
import Register from '../components/pages/register';
import Wallet from '../components/pages/wallet';
// import Works from '../components/pages/works';


import axios from 'axios'
import BiddyHeader from '../components/menu/BiddyHeader';
import constants from '../src/constants';

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
      <BiddyHeader />
      <StarryGalaxy />
      <section className='container' >
        <News />
      </section>
      <section className='container' >
        <Author />
      </section>
      <section className='container' >
        <BidForm />
      </section>
      {/* <section className='container' >
        <Explore />
      </section>
      <section className='container' >
        <Explore2 />
      </section> */}
      <section className='container' >
        <Login />
      </section>
      <section className='container' >
        <Login2 />
      </section>
      <section className='container' >
        <Register />
      </section>
      <section className='container' >
        <Wallet />
      </section>
      {/* <section className='container' >
        <Works />
      </section> */}
      

    </div>
  )
}
