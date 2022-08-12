import Link from 'next/link'
import React, { useState } from 'react'
import BlurBall from '../components/UtilityComponents/BlurBall'
import GlassButton1 from '../components/UtilityComponents/GlassButton1'
import GlassSearch from '../components/UtilityComponents/GlassSearch'
import { colleges } from '../dataset'

const Index = () => {
    const [isTrue, setIsTrue] = useState('home')

    const changeRouteHandler = () => {
        setIsTrue(true)
    }

    const collegeButtons = colleges.map((college) => {
        return (
            <GlassButton1
                textContent={college}
                target={'./subjectsPage'}
                key={college}
            />
        )
    })
    return (
        <div className='w-screen h-screen p-4 pt-8 flex flex-col gap-16  items-center font-inter text-white overflow-hidden'>
            <div className='w-8/12'>
                <GlassSearch />
            </div>
            <div className='w-full flex flex-col items-center gap-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='text-8xl font-bold'>
                    <h1 className='text-white'>FRESOURCES</h1>
                    <h1 className='-mt-4 -rotate-180 bg-clip-text text-transparent bg-gradient-to-t from-white opacity-30'>
                        FRESOURCES
                    </h1>
                </div>
                <div className='grid w-1/2 grid-cols-4 gap-10 cursor-pointer'>
                    {collegeButtons}
                </div>
            </div>
            <div className='absolute top-0 h-screen w-screen overflow-hidden bg-gradient-to-b  glass-gradient-2 -z-10'>
                <div className='h-80 w-80 rounded-full bg-primary-red absolute -left-20 bottom-4 blur-5xl opacity-30' />
                <div className='h-96 w-96 rounded-full bg-primary-green absolute right-8 -bottom-10 blur-5xl opacity-60' />
                <div className='h-80 w-80 rounded-full bg-primary-violet absolute right-10 top-0 blur-5xl opacity-30' />
            </div>
        </div>
    )
}

export default Index
// hover:bg-[#a197e4] hover:-translate-y-1 hover:scale-110 duration-300
// bg-gradient-to-b from-muted-gray via-primary-blue to-primary-blue
