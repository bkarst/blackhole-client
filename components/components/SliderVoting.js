import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import PollCountdown from './PollCountdown'

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const SliderVoting = ({ pollCampaign }) => (
 <div className="container" style={{marginTop: 100}}>
    <div className="row align-items-center">
          <div className="col-md-6">
            
              <div className="spacer-single"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h2 className="col-white">Blackhole Voting</h2>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
                <p className="lead col-white" >Each RPR you hold in your wallet equals 1 vote. If you vote more than once with the same wallet, only your latest vote will count.&nbsp; Whatever your balance of RPR is at the end of the vote will be the number of votes cast for you. You will be voting with the XUMM app. If you’d like to split your votes you can hold RPR in multiple wallets and vote with each wallet.</p>
                <p className="lead col-white" >Make sure you have our trust line set up in your XUMM app as well.&nbsp; Click here to set the trust line.</p>
                <p className="lead col-white" >If you would like to promote a particular voting option online or through social media, each voting option has a unique URL associated with it. Simply right click on the voting option, copy the link address and share it online!</p>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep d-inline' keyframes={inline} delay={900} duration={1200} triggerOnce>
              <div className="row">
                <div className="spacer-single"></div>
              </div>
              </Reveal>
          </div>
          <div className="col-md-6">
            <Reveal className='onStep d-inline' keyframes={inline} delay={300} duration={1200} triggerOnce>
                <PollCountdown pollCampaign={pollCampaign} />
            </Reveal>
          </div>
      </div>
    </div>
);
export default SliderVoting;