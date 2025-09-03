import React from 'react'
import type { ParentSlideType } from 'data/timeline'
import ChildCarousel from './ChildCarousel'

type ParentSlideProps = {
    data: ParentSlideType,
    rootId: string
}



function ParentSlide({ data, rootId }: ParentSlideProps) {

    return (
        <>
            <div className="timeline-years" id={`${rootId}-years`}>
                <h2 className='timeline-year timeline-year--start'>{data.startDate}</h2>
                <h2 className='timeline-year timeline-year--end'>{data.endDate}</h2>
            </div>

            <hr />

            <ChildCarousel eventsData={data.events} rootId={rootId} />
        </>
    )
}

export default React.memo(ParentSlide)