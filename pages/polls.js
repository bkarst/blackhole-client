import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import '../src/stylesheets/App.css'
import HomePage from '../components/pages/home'
import Collection from '../components/pages/colection'
import axios from 'axios'
import BiddyHeader from '../components/menu/BiddyHeader';
import constants from '../src/constants';
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <div>Poll active</div>;
  } else {
    // Render a countdown
    return (
    <div className='countdown-container' >
      <div className='countdown-box' >
        <div className='elementor-countdown-digits'>
          {days}
        </div>
        <div className='elementor-countdown-label'>
          Days
        </div>
      </div>
      <div className='countdown-box' >
        <div className='elementor-countdown-digits'>
          {hours}
        </div>
        <div className='elementor-countdown-label'>
          Hours
        </div>
      </div>
      <div className='countdown-box' >
        <div className='elementor-countdown-digits'>
        {minutes}
        </div>
        <div className='elementor-countdown-label'>
          Mins
        </div>
      </div>
      <div className='countdown-box' >
        <div className='elementor-countdown-digits'>
          {seconds}
        </div>
        <div className='elementor-countdown-label'>
          Secs
        </div>
      </div>
    </div>
    )
  }
};


async function getKeplr() {
  if (window.keplr) {
      return window.keplr;
  }
  
  if (document.readyState === "complete") {
      return window.keplr;
  }
  
  return new Promise((resolve) => {
      const documentStateChange = (event) => {
          if (
              event.target &&
              (event.target).readyState === "complete"
          ) {
              resolve(window.keplr);
              document.removeEventListener("readystatechange", documentStateChange);
          }
      };
      
      document.addEventListener("readystatechange", documentStateChange);
  });
}



export async function getServerSideProps(context) {
  // const pollid = context.params.pollid;
  // console.log('pollid', pollid)
  // const { nftid } = router.query
  // console.log(constants.API_URL + `/api/polls/`)
  const res = await fetch(constants.API_URL + `/api/current_poll/`)
  console.log('res', res)
  const data = await res.json()
//   const nft = data[0];
//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }
  
  return {
    props: { pollCampaign: data }, // will be passed to the page component as props
  }
}


export default function Home(props) {
  console.log('props,', props.pollCampaign)
  const castVote = async () => {
  var keplr = await getKeplr()
  console.log(keplr)
      // console.log(response.getKey(''))







      const chainId = "juno-1";

      // // Enabling before using the Keplr is recommended.
      // // This method will ask the user whether to allow access if they haven't visited this website.
      // // Also, it will request that the user unlock the wallet if the wallet is locked.
      await keplr.enable(chainId);
  
      const offlineSigner = window.keplr.getOfflineSigner(chainId);
  
      // // You can get the address/public keys by `getAccounts` method.
      // // It can return the array of address/public key.
      // // But, currently, Keplr extension manages only one address/public key pair.
      // // XXX: This line is needed to set the sender address for SigningCosmosClient.
      const accounts = await offlineSigner.getAccounts();
      //https://lcd-juno.cosmostation.io/cosmos/bank/v1beta1/balances/juno1dru5985k4n5q369rxeqfdsjl8ezutch8y9vuau?pagination.limit=1000
      const balances = await axios.get(`https://lcd-juno.cosmostation.io/cosmos/bank/v1beta1/balances/${accounts[0].address}?pagination.limit=1000`)
      // const json = await balances.json()
      console.log(accounts)
      console.log(balances)
      // // Initialize the gaia api with the offline signer that is injected by Keplr extension.
      // const cosmJS = new SigningCosmosClient(
      //     "https://lcd-cosmoshub.keplr.app",
      //     accounts[0].address,
      //     offlineSigner,
      // );






    
  }
  const poll = props.pollCampaign.poll
  const pollCampaign = props.pollCampaign
  const [nftListings, setNftListings] = useState([]);
  // useEffect(() => {
  //   axios.get(constants.API_URL + '/api/nft_listings').then(response => {
  //     setNftListings(response.data)
  //   })
  //   // Update the document title using the browser API
  // }, []);
  const endTime = Date.parse(poll.end_time)
  const startTime = Date.parse(poll.start_time)
  console.log('endTime', pollCampaign.end_time)
  console.log('startTime', pollCampaign.start_time)
  
  return (
    <div>
      <Head>
        <title>Poll List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BiddyHeader />

      <section className='container' style={{marginTop: 30}}>
        <div className='row'>
          <div className='col-lg-12'>
            Black Hole Voting
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
          <Countdown date={pollCampaign.end_time} renderer={renderer} />

      <div>

      </div>

      {poll.poll_options.map((pollOption, index) =>
            <div onClick={castVote} key={index}> ----- {pollOption.description}</div>
        )}  
          </div>
        </div>
      </section>
    </div>
  )
}
