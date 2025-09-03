import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'

import ChildSlide from "./ChildSlide";
import type { ChildEvents } from "data/timeline";
import NavigationButtons from "./NavigationButtons";

export default function ChildCarousel({ eventsData, rootId }: { eventsData: ChildEvents[]; rootId: string }) {
    const prevRef = React.useRef<HTMLButtonElement>(null)
    const nextRef = React.useRef<HTMLButtonElement>(null)

    return (
        <section
            id={`${rootId}-child`}
            className="timeline-child"
            aria-label="События выбранного периода"
        >
            <NavigationButtons
                className='timeline-nav timeline-nav--child'
                prevRef={prevRef}
                nextRef={nextRef}
                fillers={{
                    prevEl: (
                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
                        </svg>
                    ),
                    nextEl: (
                        <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A" strokeWidth="2" />
                        </svg>
                    )
                }}
            />

            <Swiper
                className="timeline-swiper timeline-swiper--child"
                modules={[Navigation]}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                        slidesOffsetBefore: 20,
                        slidesOffsetAfter: 100,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 80,
                        slidesOffsetBefore: 0,
                        slidesOffsetAfter: 0,
                    }

                }}
                onInit={(swiper) => {
                    // @ts-expect-error
                    swiper.params.navigation.prevEl = prevRef.current
                    // @ts-expect-error
                    swiper.params.navigation.nextEl = nextRef.current
                    swiper.navigation.init()
                    swiper.navigation.update()
                }}
                nested={true}
                touchStartPreventDefault={false}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            >
                {eventsData.map(eData => (
                    <SwiperSlide className="timeline-event" key={eData.id}>
                        <ChildSlide eventData={eData} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}