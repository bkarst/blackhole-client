import React from "react"
import Link from 'next/link'
import PollResponseTable from './PollResponseTable'
// eslint-disable-next-line react/display-name
const PollCampaignList = ({poll}) => {

    return <section>
        <div className="row">
      <div className="col-lg-7 offset-lg-1 mb-5">
        <div>
            Campaigns
        </div>
    <div style={{marginTop: 20, marginBottom:20, backgroundColor: "#333333"}}>
        {poll.poll_campaigns.map((pollCampaign, index) =>
        <div key={index} >
            <div style={{display: 'flex', flexDirection: 'row'}} >
                <div style={{margin: 5}} > ----- {pollCampaign.id}</div>
                <div style={{margin: 5}} >  {pollCampaign.start_time}</div>
                <div style={{margin: 5}} >  {pollCampaign.end_time}</div>
                <div style={{margin: 5}} >  {pollCampaign.total_responses}</div>
            </div>
            <PollResponseTable pollResponses={pollCampaign.poll_responses}/>
            </div>
        )}
        
    </div>
    </div>
    </div>
    </section>
}

export default PollCampaignList;