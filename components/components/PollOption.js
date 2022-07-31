import React, { useState, useEffect } from 'react';

export default function PollOption({castVote, pollOption}) {
    const [isOpen, setOpen] = useState(false);

return (
    <div onMouseLeave={() => setOpen(false)} onMouseEnter={() => setOpen(true)} className='poll-opt' onClick={() => castVote(pollOption.id)}>
          <div class="tooltip-label" style={{display: isOpen ? 'inline' : 'none', position: 'absolute'}}>
            Click to Burn
          </div>
            <div>
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