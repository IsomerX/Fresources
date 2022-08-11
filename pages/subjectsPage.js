import React, { useState } from 'react'
import Navbar from '../components/NavbarComponents/Navbar'
import { topicsJSON } from '../dataset'
// import './styles.css';

function subjectPage(props) {
    const topics = topicsJSON
    const [isActive, setIsActive] = useState('Notes')

    const buttons = Object.keys(topics).map((topic, index) => {
        return (
            <button
                onClick={() => setIsActive(topic)}
                className='btn mx-8 text-2xl text-neutral-500	 hover:text-gray-600   focus:text-white mb-2'
                key={topic}
            >
                {topic}
            </button>
        )
    })

    return (
        <div className='grid grid-cols-8 bg-[#f17bd7] w-screen h-screen gap-16'>
            <div className='col-span-2 '>
                <Navbar />
            </div>
            <div className='col-span-4 py-4'>
                <div>
                    {buttons}
                </div>
                <div>
                    {topics[isActive].map((topic, index) => {
                        return (
                            <div className='py-5 my-3 rounded-lg  text-white border  drop-shadow-lg mx-auto max-w-screen-sm	 text-center text-2xl  bg-blue-900  hover:bg-bablu cursor-pointer '
                                key={topic}
                            >
                                {topic}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='col-span-2'>
                <div></div>
            </div>

        </div>
    )
}

export default subjectPage
