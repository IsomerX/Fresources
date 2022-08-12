import React, { useState } from 'react'
import Navbar from '../components/NavbarComponents/Navbar'
import { subjectsArray, topicsJSON } from '../dataset'

function SubjectPage(props) {
    const [isActive, setIsActive] = useState('Notes')
    const [navbarShow, setNavbarShow] = useState(true)
    const topics = topicsJSON
    const subjects = subjectsArray

    const topicHeaders = Object.keys(topics).map((topic, index) => {
        return (
            <button
                onClick={() => setIsActive(topic)}
                className='transition ease-in-out delay-100 bg-orange-400 py-4 px-10 rounded-lg border-2 border-black font-poppins font-semibold text-xl hover:bg-[#a197e4] hover:-translate-y-1 hover:scale-110 duration-300 text-center'
                key={topic}
            >
                {topic}
            </button>
        )
    })

    const topicDisplay = topics[isActive].map((topic, index) => {
        return (
            <button
                className='px-10 py-4 text-center bg-primary-green rounded-lg border-type-2'
                key={topic}
            >
                {topic}
            </button>
        )
    })

    return (
        <div className='grid grid-cols-8 bg-[#f17bd7] w-screen h-screen gap-12 overflow-hidden p-4'>
            <div className={navbarShow ? 'col-span-2 ' : 'col-span-1'}>
                <Navbar
                    proppedSubjects={subjects}
                    setNavbarShow={setNavbarShow}
                />
            </div>
            <div className='col-span-4 p-4 bg-white h-5/6 rounded flex flex-col items-center border-2 border-black shadow-primary-magenta'>
                <div className='grid grid-cols-3 gap-4 text-center'>
                    {topicHeaders}
                </div>
                <div className='py-4'>{topicDisplay}</div>
            </div>
            <div className='col-span-2'>
                <div></div>
            </div>
        </div>
    )
}

export default SubjectPage
