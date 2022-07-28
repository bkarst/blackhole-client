import React from "react"
import Link from 'next/link'
import PollResponseTable from './PollResponseTable'
import PollResultsTable from "./PollResultsTable"
// eslint-disable-next-line react/display-name
const PollCampaignList = ({poll}) => {
    console.log('pollCampaign', poll)
    return <section>
        <div className="row">
      <div className="col-lg-7 offset-lg-1 mb-5">
        <div>
            Campaigns
        </div>
    <div style={{marginTop: 20, marginBottom:20, backgroundColor: "#333333"}}>
        {poll.poll_campaigns.map((pollCampaign, index) =>
        <div key={index} >
            <div >
                <div style={{margin: 5}} >  Start Time: {new Date(pollCampaign.start_time).toDateString()}</div>
                <div style={{margin: 5}} >  End Time: {new Date(pollCampaign.end_time).toDateString()}</div>
                <div style={{margin: 5}} >  Responses: {pollCampaign.total_responses}</div>
            </div>
            <PollResultsTable pollResults={pollCampaign.results}/>
            </div>
        )}
        
    </div>
    </div>
    </div>
    </section>
}

export default PollCampaignList;