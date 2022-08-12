import Link from 'next/link'
import React from 'react'

const GlassButton1 = (props) => {
    return (
        <div>
            <Link href={props.target}>
                <button className='py-4 px-16  rounded-xl font-bold text-2xl glass shadow-glass-2 shadow-[rgba(255,255,255,0.50)]
                hover:bg-gradient-to-b from-highlights-blue  hover:-translate-y-1 hover:scale-110 duration-300 transition
            '>
                    {props.textContent}
                </button>
            </Link>
        </div>
    )
}

export default GlassButton1
