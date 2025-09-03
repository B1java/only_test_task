import React from "react"

import { ChildEvents } from "data/timeline"

function ChildSlide({ eventData }: { eventData: ChildEvents }) {
    return (
        <>
            <h3 className='timeline-event-year'>{eventData.year}</h3>
            <p className='timeline-event-text'>{eventData.eventDescription}</p>
        </>
    )
}

export default React.memo(ChildSlide)