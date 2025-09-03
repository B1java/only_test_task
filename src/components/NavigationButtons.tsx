import React from "react"

type NavProps = {
    prevRef: React.RefObject<HTMLButtonElement | null>
    nextRef: React.RefObject<HTMLButtonElement | null>
    className?: string
    fillers?: {
        prevEl: React.ReactNode
        nextEl: React.ReactNode
    } | null
}

export default function NavigationButtons({ prevRef, nextRef, className, fillers = null }: NavProps) {
    return (
        <div className={className} role="group" aria-label="Навигация слайдера">
            <button
                className={`${className}-prev`}
                ref={prevRef}
                type='button'
                aria-label="Previous"
            >
                {fillers?.prevEl}
            </button>
            <button
                className={`${className}-next`}
                ref={nextRef}
                type='button'
                aria-label="Next"
            >
                {fillers?.nextEl}
            </button>
        </div>
    )
}