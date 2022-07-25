import React from "react"
import Link from 'next/link'

// eslint-disable-next-line react/display-name
const PollCampaignList = ({poll}) => {

    return <div >
        <div>
            Campaigns
        </div>
    <div style={{marginTop: 20, marginBottom:20, backgroundColor: "#333333"}}>
        {poll.poll_campaigns.map((pollCampaign, index) =>
            <div key={index} style={{display: 'flex', flexDirection: 'row'}} >
                <div style={{margin: 5}} > ----- {pollCampaign.id}</div>
                <div style={{margin: 5}} >  {pollCampaign.start_time}</div>
                <div style={{margin: 5}} >  {pollCampaign.end_time}</div>
            </div>
        )}
        
    </div>
    </div>
}

export default PollCampaignList;