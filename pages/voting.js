import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import '../src/stylesheets/App.css'
import HomePage from '../components/pages/home'
import PollResultsTable from '../components/components/PollResultsTable'
import DonutChartPollResults from '../components/components/DonutChartPollResults'

import PollOption from '../components/components/PollOption'
import StarryGalaxy from '../components/components/StarryGalaxy'

import Collection from '../components/pages/colection'
import axios from 'axios'
import BiddyHeader from '../components/menu/BiddyHeader';
import constants from '../src/constants';
import Countdown from 'react-countdown';
import Footer from '../components/components/footer';
import SliderVoting from '../components/components/SliderVoting'
import FancyCountdown from '../components/components/FancyCountdown'
import Reveal from 'react-awesome-reveal';
import { fadeIn, fadeInUp, grow } from '../lib/CssHelper'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

const getBalance = async (address) => {
  const client = await CosmWasmClient.connect("https://rpc-juno.itastakers.com/")
  console.log("client", client);
  // cw20 contract address
  // juno1rdw3gumdz7zyjn2pev9ugxs765xlv6vtv6g3jt2lqw580zrchvjs66daca

  const response = await client.queryContractSmart("juno1rdw3gumdz7zyjn2pev9ugxs765xlv6vtv6g3jt2lqw580zrchvjs66daca", {
    balance: {
      address: address
    }
  });
  return response.balance
  // console.log('response', response)
}



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

  if (props.pollCampaign.error){
    return <div>No Polls currently upcoming or active</div>
  }  

  console.log('props,', props.pollCampaign)
  const castVote = async (pollOptionId) => {
    console.log('pollOptionId', pollOptionId)
  var keplr = await getKeplr()
  if (keplr === undefined) {
    alert("Please install keplr. To continue.")
    window.open("https://www.keplr.app/", '_blank').focus();
    return
  }
  console.log(keplr)
      const chainId = "juno-1";

      // // Enabling before using the Keplr is recommended.
      // // This method will ask the user whether to allow access if they haven't visited this website.
      // // Also, it will request that the user unlock the wallet if the wallet is locked.

      try {
      await keplr.enable(chainId);
      console.log('keplr')
      }
      catch (err) {
        console.log(err)
        alert("Please Sign up for Keplr");
        return
      }
      const offlineSigner = window.keplr.getOfflineSigner(chainId);
      // // It can return the array of address/public key.
      // // But, currently, Keplr extension manages only one address/public key pair.
      // // XXX: This line is needed to set the sender address for SigningCosmosClient.
      const accounts = await offlineSigner.getAccounts();
      //https://lcd-juno.cosmostation.io/cosmos/bank/v1beta1/balances/juno1dru5985k4n5q369rxeqfdsjl8ezutch8y9vuau?pagination.limit=1000
      //use juno tools api to find balance
      // const balances = await axios.get(`https://lcd-juno.cosmostation.io/cosmos/bank/v1beta1/balances/${accounts[0].address}?pagination.limit=1000`)


      console.log('accounts', accounts)
      const address = accounts[0].address
      const balance = await getBalance(address);
      // const balancePairs = balances.data.balances
      // const json = await balances.json()
      // console.log('accounts', accounts)
      // console.log('balances', balancePairs);
      // var voting_balance = 0;
      console.log('balance', balance)
      // for (var i = 0; i < balancePairs.length; i++){
      //   const pair = balancePairs[i];
      //   if (pair.denom == "ujuno"){
      //     voting_balance = pair.amount
      //   }
      // }
      
      // // Initialize the gaia api with the offline signer that is injected by Keplr extension.
      // const cosmJS = new SigningCosmosClient(
      //     "https://lcd-cosmoshub.keplr.app",
      //     accounts[0].address,
      //     offlineSigner,
      // );
      // const title = document.getElementById("description").value;

      if (balance == 0) {
        alert("You must hold Blackhole to vote. Visit Osmosis for more details. ")
        return
      }

      var formObj = {   
        voting_balance: balance,
        address: accounts[0].address,
        poll_campaign_id: pollCampaign.id, 
        poll_option_id: pollOptionId
      }
      console.log('formObj', formObj)
      axios.post(constants.API_URL + '/api/poll_responses/', formObj).then(response => {
        if (response.data.error){
          alert(response.data.error)
        }
        else {
          alert("Thank you for your response! See the preliminary results below. ")
          // window.location.reload();
        }
      })    
  }
  const poll = props.pollCampaign.poll
  const pollCampaign = props.pollCampaign
  // const [nftListings, setNftListings] = useState([]);

  const endTime = Date.parse(poll.end_time)
  const startTime = Date.parse(poll.start_time)
  console.log('endTime', pollCampaign.end_time)
  console.log('startTime', pollCampaign.start_time)
  // 
  // poll.active = 
  return (
    <div>
      <Head>
        <title>BlackHole | Cleaning Digital Space</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StarryGalaxy />
      <BiddyHeader />
      
      <section className='container' style={{padding: 10, marginTop: 30}}>
        <SliderVoting pollCampaign={ pollCampaign }/>
      </section>
      <section className='container' style={{padding: 10, marginTop: 30}}>
        <FancyCountdown pollCampaign={pollCampaign}/>
        <div>
        <h4 className='col-white' style={{textAlign: 'center', marginTop: 20}}>
          Time till Poll Ends
        </h4>
        <div className='col-white' style={{textAlign: 'center', marginTop: 20, marginBottom: 100}}>
            Vote with your Blackhole Token Below Before the Poll Window Closes!
        </div>
        </div>
      </section>
    <section className="container" style={{padding: 10}} >
        <div className='row'>
          <div className='col-lg-12'>
          <div>
        </div>
        <div className='poll-opts-container' >
          
            {pollCampaign.is_current_poll && poll.poll_options.map((pollOption, index) =>
              <Reveal key={index} className='onStep' keyframes={grow} delay={index * 200} duration={1300} triggerOnce >
                <PollOption key={index} pollOption={pollOption} castVote={castVote} />
              </Reveal>
            )}
        
        </div>
      </div>
    </div>
  </section>
  <section className="container" style={{padding: 10}} >
        <div className='row'>
        <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce >
          <h3 style={{zIndex: 999, margin: 'auto', textAlign: 'center', marginTop: 160,  marginBottom: 6}}>
              Current Results
          </h3>
          <DonutChartPollResults pollResults={pollCampaign.results} />
          </Reveal>
        </div>

  </section>
  <Footer />
</div>
  )
}
