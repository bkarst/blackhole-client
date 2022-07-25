import React from "react"
import Link from 'next/link'

// eslint-disable-next-line react/display-name
const PollListing = ({poll, pollOptions, openModalFunction, startCampaignFunction}) => {

    return <div style={{marginTop: 20, marginBottom:20, backgroundColor: "#333333"}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div>
                <Link href={'polldetail/' + poll.id}>
                {poll.title}
                </Link>
            </div>
            <div style={{marginLeft: 30}} onClick={() => openModalFunction(poll) } >
                Start Campaign
            </div>
        </div>
        {pollOptions.map((pollOption, index) =>
            
            <div key={index}> ----- {pollOption.description}</div>
        )}
        
    </div>
}

export default PollListing;