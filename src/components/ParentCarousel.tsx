import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import ParentSlide from './ParentSlide'
import { slides } from '../data/timeline'
import NavigationButtons from './NavigationButtons'
import PaginationDots from './PaginationDots'


export default function ParentCarousel({ rootId }: { rootId: string }) {
    const prevRef = React.useRef<HTMLButtonElement>(null)
    const nextRef = React.useRef<HTMLButtonElement>(null)
    const swiperRef = React.useRef<SwiperType | null>(null)

    const [swiper, setSwiper] = React.useState<SwiperType | null>(null)
    const [active, setActive] = React.useState<number>(0)


    const parentNavClass = 'timeline-nav timeline-nav--parent'
    const parentDotsId = `${rootId}-dots`

    const handleDotClick = React.useCallback((index: number) => swiperRef.current?.slideTo(index), [])

    React.useEffect(() => {
        if (!swiper || !prevRef.current || !nextRef.current) return
        // @ts-expect-error
        swiper.params.navigation.prevEl = prevRef.current
        // @ts-expect-error
        swiper.params.navigation.nextEl = nextRef.current
        swiper.navigation.destroy()
        swiper.navigation.init()
        swiper.navigation.update()
        setActive(swiper.activeIndex)
    }, [swiper])

    return (
        <div className="timeline-parent" id={`${rootId}-parent`}>
            <h1 className="timeline-title">Исторические даты</h1>
            <Swiper
                className="timeline-swiper timeline-swiper--parent"
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                allowTouchMove={false}
                onActiveIndexChange={(sw) => setActive(sw.realIndex)}
                onBeforeInit={(sw) => {
                    // @ts-expect-error
                    sw.params.navigation.prevEl = prevRef.current
                    // @ts-expect-error
                    sw.params.navigation.nextEl = nextRef.current
                }}

                onSwiper={(swpr) => {
                    setSwiper(swpr)
                    swiperRef.current = swpr
                }}
                navigation={false as any}
                pagination={false as any}
            >
                {slides.map((s) => (
                    <SwiperSlide className="timeline-slide" key={s.id}>
                        <ParentSlide
                            data={s}
                            rootId={rootId}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <h1 className='timeline-pagecounter'>0{active + 1}/0{slides.length}</h1>
            <NavigationButtons
                className={parentNavClass}
                prevRef={prevRef}
                nextRef={nextRef}
                fillers={{
                    prevEl: (
                        <svg width="25" height="25" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth='4' />
                        </svg>
                    ),
                    nextEl: (
                        <svg width="25" height="25" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A" strokeWidth="4" />
                        </svg>
                    )
                }}
            />
            <PaginationDots
                id={parentDotsId}
                className='timeline-dots timeline-dots--parent'
                total={slides.length}
                activeIndex={active}
                onDotClick={handleDotClick}
            />
        </div>
    )
}