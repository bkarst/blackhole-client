import React from "react"
import Link from 'next/link'

// eslint-disable-next-line react/display-name
const PollListing = ({poll, pollOptions}) => {
    return <div><div>
        <Link href={'polldetail/' + poll.id}>
        {poll.title}
        </Link>
        </div>
        {pollOptions.map((pollOption, index) =>
            
            <div key={index}> ----- {pollOption.description}</div>
        )}
    </div>
}

export default PollListing;