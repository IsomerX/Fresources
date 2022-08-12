import React from 'react'

const GlassButton1 = (props) => {
    return (
        <div>
            <button className='py-4 px-10  rounded-lg font-bold text-2xl glass-gradient-1 shadow-glass shadow-[rgba(255,255,255,0.50)]'>
                {props.textContent}
            </button>
        </div>
    )
}

export default GlassButton1
