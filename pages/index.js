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
                    <button className='transition ease-in-out delay-100 bg-[#d745b8] shadow-offset-magenta py-4 px-10 rounded-lg border-2 border-black font-poppins font-semibold text-xl text-white hover:bg-[#a197e4] hover:-translate-y-1 hover:scale-110 duration-300'>
                        {collage}
                    </button>
                </Link>
            </div>
        )
    })
    return (
        <div className='grid grid-flow-col bg-[#f17bd7] w-screen h-screen p-4'>
            <div className='col-span-1'></div>
            <div className='col-span-2 flex flex-col justify-around gap-2'>
                <div className='h-1/2 bg-white rounded-2xl border-2 border-black shadow-primary-magenta grid grid-flow-col'>
                    <div>{/* <img src='../public/samples/1.png'></img> */}</div>
                    <div className='col-span-2 text-center font-poppins font-bold flex flex-col justify-center gap-4'>
                        <div className='text-5xl'>
                            <span className='text-[#4fb2aa] font-bold'>F</span>
                            <span className='font-bold'>resources</span>
                        </div>
                        <div className='text-2xl font-bold'>
                            <span className=' px-2'>College:</span>
                            <span className='text-[#4fb2aa]'>F</span>
                            <span className=''>redefined</span>
                        </div>
                    </div>
                    <div></div>
                </div>

                <div className='col-span-2 bg-white rounded-2xl border-2 border-black flex justify-between items-center w-full gap-4 p-6 shadow-primary-magenta '>
                    {collageButtons}
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default index
