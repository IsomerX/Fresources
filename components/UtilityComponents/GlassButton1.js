import Link from 'next/link'
import React from 'react'

const GlassButton1 = (props) => {
    return (
        <Link href={props.target}>
            <button className=
                'px-8 py-4  md:py-4 md:px-6 rounded-xl font-bold text-2xl glass shadow-glass-2 shadow-[rgba(255,255,255,0.50)] hover:bg-gradient-to-b hover:from-highlights-blue duration-300 transition'>
                {props.textContent}
            </button>
        </Link>
    )
}

export default GlassButton1
