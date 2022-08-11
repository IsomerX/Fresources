import Link from 'next/link'
import React from 'react'
import { collages } from '../dataset'

const index = () => {
    const collagesArray = collages
    console.log(collagesArray)

    const collageButtons = collagesArray.map((collage) => {
        return (
            <div key={collage} className=''>
                <Link href='./subjectsPage'>
                    <button className='py-4 px-10  rounded-lg font-bold text-2xl glass-gradient-1 shadow-glass shadow-white'>
                        {collage}
                    </button>
                </Link>
            </div>
        )
    })
    return (
        <div className='bg-primary-blue w-screen h-screen p-4 flex flex-col gap-16 items-center font-inter text-white'>
            <div>
                search bar
            </div>
            <div>
                <div className='text-7xl font-bold'>
                    <h1 className='text-white'>FREESOURCES</h1>
                    <h1 className=' -mt-4 -rotate-180 bg-clip-text text-transparent bg-gradient-to-t from-white opacity-30'>FREESOURCES</h1>
                </div>
            </div>
            <div className='flex gap-10 cursor-pointer'>
                {collageButtons}
            </div>
            <div className='absolute hidden'>
                balls box
            </div>
        </div>
    )
}

export default index
// hover:bg-[#a197e4] hover:-translate-y-1 hover:scale-110 duration-300