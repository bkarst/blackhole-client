import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../components/pages/home'
import SliderMainHome from '../components/components/SliderMainHome';
import Roadmap from '../components/components/Roadmap'
import TreeRoadmap from '../components/components/TreeRoadmap'
import axios from 'axios'
import BiddyHeader from '../components/menu/BiddyHeader';
import StarryGalaxy from '../components/components/StarryGalaxy';
import constants from '../src/constants';
import Reveal from 'react-awesome-reveal';
import { fadeIn } from '../lib/CssHelper'
import Footer from '../components/components/footer';
import BlackholeHeader from '../components/menu/BlackholeHeader';
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { assertIsBroadcastTxSuccess, SigningStargateClient, StargateClient } from "@cosmjs/stargate";
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import HeaderMetaTags from '../components/components/HeaderMetaTags';
import BlackholeProfile from '../components/components/BlackholeProfile';

export default function Home() {
  // const [nftListings, setNftListings] = useState([]);
  useEffect(() => {
  }, []);
  return (
    <div>
      <Head>
        <title>BlackHole | Cleaning Digital Space</title>
        <HeaderMetaTags />
      </Head>
      <StarryGalaxy />
      <section className='container' style={{marginTop: -50}}>
      <BlackholeHeader />
      </section>
      <section style={{marginTop: -150}}>
        <BlackholeProfile />
      </section>
      <Footer />

    </div>
  )
}
