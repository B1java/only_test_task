import React from "react"
import clsx from "clsx"

type Props = {
    total: number
    activeIndex: number
    onDotClick: (index: number) => void
    className?: string
    id?: string
}

export default function PaginationDots({ total, activeIndex, onDotClick, className = '', id }: Props) {
    return (
        <div id={id} className={clsx('pagination-dots', className)} role='tablist' aria-label="Пагинация">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    role='tab'
                    aria-selected={i === activeIndex}
                    aria-label={`Перейти к слайду ${i + 1}`}
                    className={clsx('pagination-dot', i === activeIndex && 'is-active')}
                    onClick={() => onDotClick(i)}
                    type='button'
                >
                    <span className="visually-hidden">{i + 1}</span>
                </button>
            ))}
        </div>
    )
}