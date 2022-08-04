import React, { useState, useEffect } from 'react';
import Reveal from 'react-awesome-reveal';
// import { keyframes } from "@emotion/react";
import { fadeInUp } from '../../lib/CssHelper';

export default function PollOption({castVote, pollOption}) {
    const [isOpen, setOpen] = useState(false);

return (
    <div onMouseLeave={() => setOpen(false)} onMouseEnter={() => setOpen(true)} className='poll-opt' onClick={() => castVote(pollOption.id)}>
          <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600}  >
            <div className="tooltip-label" style={{display: isOpen ? 'inline' : 'none', position: 'absolute'}}>
              Click to Burn
            </div>
          </Reveal>
            <div className='vote-container'>
              <div className='dot'>
                <img src={pollOption.thumbnail_url} height={100} />
                <div className='poll-opt-label' >
                  {pollOption.description}
                </div>
              </div>
            </div>
    </div>
)
    
}