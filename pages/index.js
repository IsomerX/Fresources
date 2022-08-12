import Link from 'next/link'
import React from 'react'
import BlurBall from '../components/UtilityComponents/BlurBall'
import GlassButton1 from '../components/UtilityComponents/GlassButton1'
import GlassSearch from '../components/UtilityComponents/GlassSearch'
import { collages } from '../dataset'

const index = () => {
    const collagesArray = collages

    const collageButtons = collagesArray.map((collage) => {
        return (
            <div key={collage} className=''>
                <Link href='./subjectsPage'>
                    <GlassButton1 textContent={collage} />
                </Link>
            </div>
        )
    })
    return (
        <div className='w-screen h-screen p-4 pt-8 flex flex-col gap-16 items-center font-inter text-white overflow-hidden bg-gradient-to-b glass-gradient-2'>
            <div className='w-1/2'>
                <GlassSearch />
            </div>
            <div>
                <div className='text-7xl font-bold'>
                    <h1 className='text-white'>FREESOURCES</h1>
                    <h1 className=' -mt-4 -rotate-180 bg-clip-text text-transparent bg-gradient-to-t from-white opacity-30'>
                        FREESOURCES
                    </h1>
                </div>
            </div>
            <div className='flex gap-10 cursor-pointer'>
                {collageButtons}
            </div>
            <div className='relative h-screen w-screen'>
                <div className='h-[24rem] w-[24rem] rounded-full bg-primary-red absolute -left-20 bottom-4 blur-2xl opacity-60' />
                <div className='h-80 w-80 rounded-full bg-primary-green absolute right-16 blur-2xl' />
                <div className='h-80 w-80 rounded-full bg-primary-violet absolute right-10 bottom-64 blur-2xl opacity-40' />
            </div>
        </div>
    )
}

export default index
// hover:bg-[#a197e4] hover:-translate-y-1 hover:scale-110 duration-300
// bg-gradient-to-b from-muted-gray via-primary-blue to-primary-blue
