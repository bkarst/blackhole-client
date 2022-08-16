import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import Link from 'next/link'
import { fadeIn } from '../../lib/CssHelper';

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

const slidermainhome= () => (
 <div className="container main-cont">
    <div className="row align-items-center">
          <div className="col-md-6">
              <div className="spacer-single"></div>
              
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h1 className="col-white">Creating On-chain Demand</h1>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
              <p className="lead col-white">
              A mechanism built for maintaining order through the broader crypto space, BlackHole finds its purpose in upholding the sanitation of digital asset ecosystems by serving as an economic engine through which holders can utilize their share of BLKH tokens to vote on the destruction of other digital assets, BLKH, assets, and debt if the community so chooses.
              </p>
              </Reveal>
              <div className="spacer-10"></div>
              <div style={{display: 'flex'}}>
              <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
                <Link href='/voting'>
                  <span className="btn-main inline lead">Vote Now</span>
                </Link>
              <div className="mb-sm-30">
              <Link href='/voting'>
                  <span className="btn-main inline lead">View Whitepaper</span>
                </Link>
              </div>
              </Reveal>
              </div>
              <Reveal className='onStep d-inline' keyframes={inline} delay={900} duration={1200} triggerOnce>
              <div className="row">
                  <div className="spacer-single"></div>
              </div>
              </Reveal>  
          </div>
          <div className="col-md-6">
            <Reveal className='onStep d-inline' keyframes={fadeIn} delay={0} duration={3500} triggerOnce>
              <img src="../img/spaceman5.png" className='spaceman-img' />
            </Reveal>
          </div>
      </div>
    </div>
);
export default slidermainhome;