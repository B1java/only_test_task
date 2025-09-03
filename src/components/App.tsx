import React from 'react'
import ParentCaurousel from './ParentCarousel'


import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/App.scss'

export default function App() {
    const TIMELINE_ID = 'timeline-1'

    return (
        <section id={TIMELINE_ID} className="timeline" role="region" aria-label="Исторические даты">
            <ParentCaurousel rootId={TIMELINE_ID} />
        </section>
    )
}