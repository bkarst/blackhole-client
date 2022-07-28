import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import '../src/stylesheets/App.css'
import HomePage from '../components/pages/home'
import PollResultsTable from '../components/components/PollResultsTable'
import Collection from '../components/pages/colection'
import axios from 'axios'
import BiddyHeader from '../components/menu/BiddyHeader';
import constants from '../src/constants';
import Countdown from 'react-countdown';
import Footer from '../components/components/footer';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <div></div>;
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
      console.log('keplr2')
      // // It can return the array of address/public key.
      // // But, currently, Keplr extension manages only one address/public key pair.
      // // XXX: This line is needed to set the sender address for SigningCosmosClient.
      const accounts = await offlineSigner.getAccounts();
      console.log('keplr2')
      //https://lcd-juno.cosmostation.io/cosmos/bank/v1beta1/balances/juno1dru5985k4n5q369rxeqfdsjl8ezutch8y9vuau?pagination.limit=1000
      const balances = await axios.get(`https://lcd-juno.cosmostation.io/cosmos/bank/v1beta1/balances/${accounts[0].address}?pagination.limit=1000`)
      console.log('keplr2')
      // const json = await balances.json()
      console.log('accounts', accounts)
      console.log('balances', balances)
      // // Initialize the gaia api with the offline signer that is injected by Keplr extension.
      // const cosmJS = new SigningCosmosClient(
      //     "https://lcd-cosmoshub.keplr.app",
      //     accounts[0].address,
      //     offlineSigner,
      // );
      // const title = document.getElementById("description").value;
      var formObj = { 
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
          window.location.reload();
        }
      })    
  }
  const poll = props.pollCampaign.poll
  const pollCampaign = props.pollCampaign
  const [nftListings, setNftListings] = useState([]);

  const endTime = Date.parse(poll.end_time)
  const startTime = Date.parse(poll.start_time)
  console.log('endTime', pollCampaign.end_time)
  console.log('startTime', pollCampaign.start_time)
  // 
  // poll.active = 
  return (
    <div>
      <Head>
        <title>Poll List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BiddyHeader />

      <section className='container' style={{padding: 10, marginTop: 120}}>
        <div className='row'>
          <div className='col-lg-12'>
            <div className="page-title-head hgroup">
              <h3>Blackhole Voting</h3>
              </div>
          </div>
        </div>
        </section>
        <section className="container" style={{padding: 10}} >
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-809a63a" data-id="809a63a" data-element_type="column">
			    <div class="elementor-widget-wrap elementor-element-populated">
								<div class="elementor-element elementor-element-e12331c elementor-widget elementor-widget-text-editor" data-id="e12331c" data-element_type="widget" data-widget_type="text-editor.default">
				  <div class="elementor-widget-container">
							<p>Each RPR you hold in your wallet equals 1 vote. If you vote more than once with the same wallet, only your latest vote will count.&nbsp; Whatever your balance of RPR is at the end of the vote will be the number of votes cast for you. You will be voting with the XUMM app. If you’d like to split your votes you can hold RPR in multiple wallets and vote with each wallet.</p><p>Make sure you have our trust line set up in your XUMM app as well.&nbsp; Click here to set the trust line.</p><p>If you would like to promote a particular voting option online or through social media, each voting option has a unique URL associated with it. Simply right click on the voting option, copy the link address and share it online!</p>						</div>
				  </div>
				</div>
		</div>
							</div>
		</section>
    <section className="container" style={{padding: 10}} >
        <div className='row'>
          <div className='col-lg-12'>
            { pollCampaign.is_current_poll && 
              <Countdown date={pollCampaign.end_time} renderer={renderer} />
            }
            { !pollCampaign.is_current_poll && 
              <div>
                <div style={{textAlign: 'center'}}>
                  Time Till Next Poll
                </div>
                <Countdown date={pollCampaign.start_time} renderer={renderer} />
              </div>
            }
          <div>
        </div>
        <div className='poll-opts-container' >
        {pollCampaign.is_current_poll && poll.poll_options.map((pollOption, index) =>
        <div key={index} className='poll-opt' onClick={() => castVote(pollOption.id)}>
            <div>
              <div className='dot'>
                <img src={pollOption.thumbnail_url} height={100} />
                <div className='poll-opt-label' >
                  {pollOption.description}
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  </section>
  <section className="container" style={{padding: 10}} >
        <div className='row'>
          <PollResultsTable pollResults={pollCampaign.results} />
        </div>
  </section>
  <Footer />
</div>
  )
}
